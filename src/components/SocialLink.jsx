import React from 'react'

const SocialLink = ({ key, href, icon, itemClass }) => {
  return (
    <li key={key}>
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  )
}

export default SocialLink
