import React from 'react'
// import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap'

// type PropTypes = {
//   onClickFilterByKeyword(keywordSearch: string): void
// }

const UserDropdown = ({ onLogin }: any) => {

  return (
    <button type='button' onClick={onLogin}>Login</button>
  )
}

export default UserDropdown
