import { Dispatch } from 'redux'
import { createAction } from 'deox'

import auth0 from '../services/auth0'

const auth0Instance = auth0()

export const login = createAction(
  '[AUTH] VERIFY AUTHENTICATION'
)

export const loginRequest = () =>
  (dispatch: Dispatch) => {
    dispatch(login())

    auth0Instance.login()
  }

// export const loginSuccess
