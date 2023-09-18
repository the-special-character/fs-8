import React, { memo } from 'react'

const Test = ({user}) => {
  return (
    <div>{user?.name}</div>
  )
}

export default memo(Test)