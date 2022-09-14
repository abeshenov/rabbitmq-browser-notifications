import { useState } from 'react'
import { FanoutDemo, TopicDemo } from './demos'

const App: () => JSX.Element = () => {
  const [showTopicDemo, setShowTopicDemo] = useState(true)
  const [showFanoutDemo, setShowFanoutDemo] = useState(false)

  return (
    <>
      <header>
        <h1>AMQP/STOMP demo</h1>
      </header>

      <nav>
        <ul>
          <li onClick={() => { setShowFanoutDemo(false); setShowTopicDemo(true) }}>Topic</li>
          <li onClick={() => { setShowTopicDemo(false); setShowFanoutDemo(true) }}>Fanout</li>
        </ul>
      </nav>

      <main>
        {showTopicDemo && <TopicDemo />}
        {showFanoutDemo && <FanoutDemo />}
      </main>
    </>
  )
}

export default App
