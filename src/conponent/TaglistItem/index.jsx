import React from 'react'
import task from  '../task'

const TaglistItem = ({tags}) => {
  return (
    <div>
        <li key={tags.id}>
            <small>{tags.icon}</small> - {tags.text}
          </li>
    </div>
  )
}

export default TaglistItem