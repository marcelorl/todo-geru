import React, { Fragment, useEffect } from 'react'

type PropsType = {
  onLoadRegisterNotificationId: () => {},
  notificationId: string
}

const InitializeNotification = ({ onLoadRegisterNotificationId, notificationId }: PropsType) => {
  useEffect(() => {
    if (!Boolean(notificationId)) {
      onLoadRegisterNotificationId()
    }
  }, [notificationId, onLoadRegisterNotificationId])

  return (<Fragment />)
}

export default InitializeNotification
