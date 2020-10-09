const data = require('./mock-data')
const LATENCY = 400

export function getAllMessages (cb) {
  setTimeout(() => {
    cb(data)
  }, LATENCY)
}

export function createMessage ({ text, thread }, cb) {
  const timestamp = Date.now()
  const id = 'm_' + timestamp
  const message = {
    id,
    text,
    timestamp,
    threadID: thread.id,
    threadName: thread.name,
    authorName: 'Evan'
  }
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve()
      cb(message)
    }, LATENCY)
  })
}
