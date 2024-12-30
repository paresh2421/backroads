import React from 'react'

const PageLink = ({ key, linkVal, text, itemClass }) => {
  return (
    <li key={key}>
      <a href={linkVal} className={itemClass}>
        {' '}
        {text}{' '}
      </a>
    </li>
  )
}

export default PageLink
