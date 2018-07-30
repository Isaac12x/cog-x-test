import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getTopStories, getItem } from '../../util/hn_api';
import Loader from 'react-loader';
import ListItem from '../presentational/ListItem';
import {
  selectSource,
  fetchItemsIfNeeded,
  getInitialData,
  getNext50,
} from '../../actions/hackernews';

class ListView extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false)
    const { dispatch, selectedSource } = this.props
    dispatch(getInitialData(selectedSource))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false)
  }

  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200) &&
      !this.props.isFetching
    ) {
      // here we need to append 50 more
      //this.props.onPaginatedSearch();
      const { stories, dispatch, getState, selectedSource }  = this.props;
      dispatch(getNext50(selectedSource, stories, dispatch, getState))
    }
  }


  render() {
    const { selectedSource, stories, items, isFetching, getState } = this.props
    return  (
      <React.Fragment>
          {isFetching && items.length === 0 && <Loader loaded={false} lines={4} length={20} width={10} radius={30}
                                                 corners={1} rotate={0} direction={1} color="#000" speed={1}
                                                 trail={60} shadow={false} hwaccel={false} className="spinner"
                                                 zIndex={2e9} top="50%" left="50%" scale={1.00}
                                                 loadedClassName="loadedContent"/>}
          {!isFetching && items.length === 0 && <h2>Failed loading.</h2>}

          {items.length > 49 &&
            <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <ListItem items={items} />
            </div>
          }
      </React.Fragment>
    )
  }
}

ListView.propTypes = {
  selectedSource: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  maxLoaded: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  const { selectedSource, storiesBySource, itemsBySource, maxLoaded } = state
  const {
    stories: stories,
  } = storiesBySource[selectedSource] || {
    stories: [],
  }
  const {
    isFetching,
    items: items,
  } = itemsBySource['undefined'] || {
    isFetching: true,
    items: []
  }

  return {
    selectSource,
    stories,
    items,
    isFetching,
    maxLoaded
  }
};


export default connect(mapStateToProps)(ListView);
