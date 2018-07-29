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

const ListItem = (props) => {
  return (
    <ul>
      {this.props.items.map((item, i) =>
          <a key={i} href="" noopener="true" noreferrer="true" target="_blank">
            <li key={i}>{item.title}</li>
         </a>)}

    </ul>
  )
}

ListItem.propTypes = {
  items: PropTypes.array.isRequired
}

export default ListItem;
