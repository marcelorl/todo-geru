import { createReducer } from 'deox'

import {
  registerNotificationId
} from '../actions'

type NotificationType = {
  id: string
}

export const INITIAL_STATE: NotificationType = {
  id: ''
}

const reducer = createReducer(INITIAL_STATE, handle => [
  handle(registerNotificationId, (state: any, { payload }: any) => ({
    id: payload.id
  }))
])

export default reducer
