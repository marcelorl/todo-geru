import Auth0Lock from 'auth0-lock'

export default () => {
  const lock = new Auth0Lock('APAI8CkBipmwrB03OPz2H4XDzdN9kRFl', 'deliverer.auth0.com',
    {
      theme: {
        logo: `${window.location.origin}/icon.png`
      },
      languageDictionary: {
        title: 'TODO APP'
      },
      container: 'login',
      auth: {
        responseType: 'code token id_token',
        params: {
          scope: 'openid email'
        }
      }
  })

  lock.on('authenticated', function(authResult: any) {
    lock.getUserInfo(authResult.accessToken, function(error: any, profile: any) {
      if (error) {
        return
      }
console.log(authResult, profile)
      localStorage.setItem('accessToken', authResult.accessToken)
      localStorage.setItem('profile', JSON.stringify(profile))
    })
  })

  return {
    login() {
      lock.show()
    },

    // handleAuthentication() {
    //   auth.parseHash((err, authResult) => {
    //     if (authResult && authResult.accessToken && authResult.idToken) {
    //       this.setSession(authResult)
    //     } else if (err) {
    //       // history.replace('/home')
    //       console.log(err)
    //       alert(`Error: ${err.error}. Check the console for further details.`)
    //     }
    //   })
    // },
    //
    // setSession(authResult: any) {
    //   // Set isLoggedIn flag in localStorage
    //   localStorage.setItem('isLoggedIn', 'true')
    //   localStorage.setItem('accessToken', authResult.accessToken)
    //   localStorage.setItem('idToken', authResult.idToken)
    //   localStorage.setItem('expiresAt', ((authResult.expiresIn * 1000) + new Date().getTime()).toString())
    //   // navigate to the home route
    //   // history.replace('/home')
    // },
    //
    // renewSession() {
    //   auth.checkSession({}, (err, authResult) => {
    //     if (authResult && authResult.accessToken && authResult.idToken) {
    //       this.setSession(authResult)
    //     } else if (err) {
    //       this.logout()
    //       console.log(err)
    //       alert(`Could not get a new token (${err.error}: ${err.error_description}).`)
    //     }
    //   })
    // },
    //
    // logout() {
    //   localStorage.removeItem('isLoggedIn')
    //   localStorage.removeItem('accessToken')
    //   localStorage.removeItem('idToken')
    //   localStorage.removeItem('expiresAt')
    //
    //   auth.logout({
    //     returnTo: window.location.origin
    //   })
    //
    //   // navigate to the home route
    //   // history.replace('/home')
    // }
  }
}
