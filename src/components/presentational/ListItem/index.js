import React from 'react';
import PropTypes from 'prop-types';

// const ListItem = ({id, score, url, title, ...props}) => {
//   const strippedUrl = url.strip('/')[3]
//   const bareUrl = strippedUrl.split('.').slice(1, 3).join('.')
//   const site = "from?site=" + bareUrl
//   console.log(props);
//   return (
//     <tr id={id}>
//       <td>{score}</td>
//       <td>
//         <a href={url}>{title}</a>
//         <a href={site}><span>{bareUrl}</span></a>
//       </td>
//     </tr>
//   )
// }

const ListItem = ({ items }) => {
  return (
    <ul>
      {items.map((item, i) =>
        <div className="card" key={i}>
          <header className="card-header">
            <p className="card-header-title">
                <li>{item.title} </li>
              <p className="has-text-grey is-size-6">&nbsp; - {item.type} by {item.by} </p>
            </p>

            <a href={item.url} noopener="true" noreferrer="true" target="_blank" className="card-header-icon" aria-label="link">
              <span className="icon">
                <i className="fas fa-link"></i>
              </span>
            </a>
            <a href="#" className="card-header-icon" aria-label="more options">
              <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
        </div>)}

    </ul>
  )
}

ListItem.propTypes = {
  items: PropTypes.array.isRequired
}

export default ListItem;
