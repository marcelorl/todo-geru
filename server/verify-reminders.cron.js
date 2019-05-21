const fs = require('fs')
const axios = require('axios')
const dayjs = require('dayjs')
const path = require('path')

require('dotenv').config({
  path: path.resolve(__dirname, '.env')
})

const dbData = fs.readFileSync(path.resolve(__dirname, 'db.json'))
const dbDataParsed = JSON.parse(dbData)

const todos = dbDataParsed.todos.map(todo => {
  // if (!todo.reminderSent && !todo.completed) {
    const now = dayjs()
    const reminderTime = dayjs(todo.dueDate).subtract(todo.reminder, 'minute')
    const diff = now.diff(reminderTime, 'minute')

    if (diff > -1 && todo.reminder >= diff) {
      console.log('todo', todo)
      console.log('diff', diff)
      console.log('now', now.format('DD/MM/YYYY HH:mm:ss'))
      console.log('reminderTime', reminderTime.format('DD/MM/YYYY HH:mm:ss'))

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
          }
        )
          .then(() =>
            console.log('TODO REMINDER SENT', JSON.stringify(todo, null, 2))
          )
          .catch(e => console.error(e.request))
      })
    }
  // }

  return todo
})

const dataToBeWritten = {
  notificationIds: dbDataParsed.notificationIds,
  todos
}

fs.writeFile('db.json', JSON.stringify(dataToBeWritten, null, 2), 'utf8', () => {})
