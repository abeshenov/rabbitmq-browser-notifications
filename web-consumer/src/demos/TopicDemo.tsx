import { NotificationPannel } from '../components'

const TopicDemo: () => JSX.Element = () => (
  <>
    <NotificationPannel className='red' topic='/exchange/notifications/notification.red' />
    <NotificationPannel className='green' topic='/exchange/notifications/notification.green' />
    <NotificationPannel className='blue' topic='/exchange/notifications/notification.blue' />
    <NotificationPannel className='yellow' topic='/exchange/notifications/notification.*' />
  </>
)

export default TopicDemo
