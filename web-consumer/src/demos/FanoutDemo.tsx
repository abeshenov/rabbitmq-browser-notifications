import { NotificationPannel } from '../components'

const FanoutDemo: () => JSX.Element =
() => (
  <>
    <NotificationPannel className='red' topic='/queue/red' />
    <NotificationPannel className='green' topic='/queue/green' />
    <NotificationPannel className='blue' topic='/queue/blue' />
  </>
)

export default FanoutDemo
