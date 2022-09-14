import { useEffect, useState, useCallback } from 'react'
import { Client } from '@stomp/stompjs'

interface NotificationPannelProps {
  className: string
  topic: string
}

const NotificationPannel: (props: NotificationPannelProps) => JSX.Element =
({ className, topic }) => (
  <div className={`notifier ${className}`}>
    <h2>{topic}</h2>
    <NotificationListener topic={topic} />
  </div>
)

interface NotificationListenerProps {
  topic: string
}

const NotificationListener: (props: NotificationListenerProps) => JSX.Element =
 ({ topic }) => {
   const [notifications, setNotifications] = useState<string[]>([])

   const addToNotificationList = useCallback((notification: string) =>
     setNotifications((existingNotifications: string[]) => [...existingNotifications, notification]),
   [])

   useEffect(() => {
     const newClient = registerNewClient(topic, addToNotificationList)
     return () => {
       console.debug(`Deactivating client for ${topic}`)
       void newClient.deactivate()
     }
   }, [topic, addToNotificationList])

   return (
     <ul>
       {notifications.map((notification) => <li>{notification}</li>)}
     </ul>
   )
 }

const registerNewClient: (topic: string, notificationCallback: (notification: string) => void) => Client =
  (topic, notificationCallback) => {
    console.debug(`Registering client for ${topic}`)

    const newClient = new Client({
      brokerURL: 'ws://localhost:15674/ws',
      connectHeaders: {
        login: 'guest',
        passcode: 'guest'
      },
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000
    })

    newClient.onConnect = (_) => {
      console.debug('Connected to WebSocket')
      newClient.subscribe(topic, (message) => notificationCallback(message.body))
    }

    newClient.activate()

    return newClient
  }

export default NotificationPannel
