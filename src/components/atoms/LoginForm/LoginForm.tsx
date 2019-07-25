import React, { useEffect } from 'react'

type PropTypes = {
  onLoadLoginPage(): void
}

const LoginForm = ({ onLoadLoginPage } : PropTypes) => {
  useEffect(() => {
    onLoadLoginPage()
  }, [onLoadLoginPage])

  return (<div className='border border-secondary rounded' id='login' />)
}

export default LoginForm
