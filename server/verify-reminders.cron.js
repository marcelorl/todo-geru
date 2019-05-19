const fs = require('fs')
const axios = require('axios')
const dayjs = require('dayjs')
require('dotenv').config()

const dbData = fs.readFileSync('db.json')
const dbDataParsed = JSON.parse(dbData)

const todos = dbDataParsed.todos.map(todo => {
  if (!todo.reminderSent) {
    const now = dayjs()
    const reminderTime = dayjs(todo.dueDate).subtract(todo.reminder, 'minute')

    if (now.diff(reminderTime, 'minute') > -1) {
      todo.reminderSent = true

      dbDataParsed.notificationIds.forEach(item => {
        axios.post('https://fcm.googleapis.com/fcm/send', {
            notification: {
              title: 'TODO GERU',
              body: todo.text
            },
            to: item.id
          },
          {
            headers: {
              Authorization: `key=${process.env.FIREBASE_KEY}`
            }
          })
      })
    }
  }

  return todo
})

const dataToBeWritten = {
  notificationIds: dbDataParsed.notificationIds,
  todos
}

fs.writeFile('db.json', JSON.stringify(dataToBeWritten, null, 2), 'utf8', () => {})
