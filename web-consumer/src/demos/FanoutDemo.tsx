import { NotificationPanel } from '../components'

const FanoutDemo: () => JSX.Element =
() => (
  <>
    <NotificationPanel className='red' topic='/queue/red' />
    <NotificationPanel className='green' topic='/queue/green' />
    <NotificationPanel className='blue' topic='/queue/blue' />
  </>
)

export default FanoutDemo
