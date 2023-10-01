import React from 'react'
import { useParams } from 'react-router'

const UserDetail = () => {

    const param =  useParams()
    const userId = param.userId

  return (
    <div>
      Detail  of user {userId}
    </div>
  )
}

export default UserDetail
