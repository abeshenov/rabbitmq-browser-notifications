import { NotificationPanel } from '../components'

const TopicDemo: () => JSX.Element = () => (
  <>
    <NotificationPanel className='red' topic='/exchange/notifications/notification.red' />
    <NotificationPanel className='green' topic='/exchange/notifications/notification.green' />
    <NotificationPanel className='blue' topic='/exchange/notifications/notification.blue' />
    <NotificationPanel className='yellow' topic='/exchange/notifications/notification.*' />
  </>
)

export default TopicDemo
