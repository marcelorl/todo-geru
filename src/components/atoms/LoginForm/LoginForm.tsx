import React, { useEffect } from 'react'

type PropTypes = {
  onLoadLoginPage(): void
}

const LoginForm = ({ onLoadLoginPage } : PropTypes) => {
  useEffect(() => {
    onLoadLoginPage()
  }, [onLoadLoginPage])

  return (
    <div className='h-100 d-flex justify-content-center align-items-center'>
      <div className='border border-secondary rounded' id='login' />
    </div>
  )
}

export default LoginForm
