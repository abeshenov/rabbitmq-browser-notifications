Object.assign(global, { WebSocket: require('ws') })
const StompJs = require('@stomp/stompjs')

const topic = '/exchange/notifications/notification.*'

const connectionParams = {
  brokerURL: 'ws://localhost:15674/ws',
  connectHeaders: {
    login: 'guest',
    passcode: 'guest'
  },
  reconnectDelay: 5000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000
}

const connectionCallBack = (stompMessage) => {
  console.log(`Got message from ${stompMessage.headers.destination}`)
  console.log(`> ${stompMessage.body}\n`)
}

const client = new StompJs.Client(connectionParams)

client.onConnect = (frame) => {
  console.debug('Connected to WebSocket')
  client.subscribe(topic, connectionCallBack)
}

client.activate()
