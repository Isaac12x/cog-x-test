import React from 'react';
import PropTypes from 'prop-types';

const ListSubtitle = ({points, user, userUrl, id, when, comments, kids }) => {
  const numberComments = kids.length
  return (
    <tr>
      <td />
      <td>
         by
         <a href={userUrl}>{user}</a>
         <span class="age">
           <a href="item?id=17608732">{when}</a>
         </span>
         <span class="score" id="score_17608732">
           {comments} points
         </span>
         |
         <a href="hide?id=17608732&amp;goto=news">
           hide
         </a>
          |
         <a href="item?id=17608732">
           {descendants} comments
         </a>
      </td>
    </tr>
  )
}

ListSubtitle.propTypes = {
  points: PropTypes.number,
  user: PropTypes.string,
  userUrl: PropTypes.string,
  id: PropTypes.number,
  comments: PropTypes.number,
  kids: PropTypes.list,
}


export default React;
