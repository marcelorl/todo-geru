import dayjs from 'dayjs'
import {TodoType} from "./models";

export const filterByDate = (filteredList: [], daysFilter: string) => {
  switch (daysFilter) {
    case 'SHOW_ALL':
      return filteredList
    case 'TODAY':
      return filteredList.filter((todo: TodoType) => {
        const today = dayjs().format('DDMMYYYY')
        const dueDate = dayjs(todo.dueDate).format('DDMMYYYY')

        return today === dueDate
      })
    case '7_DAYS_AGO':
      return filteredList.filter((todo: TodoType) => {
        const dueDate = dayjs(todo.dueDate)
        const weekAgo = dayjs().subtract(7, 'day')

        return dueDate.diff(weekAgo, 'day') > -1
      })
    case '30_DAYS_AGO':
      return filteredList.filter((todo: TodoType) => {
        const dueDate = dayjs(todo.dueDate)
        const monthAgo = dayjs().subtract(30, 'day')

        return dueDate.diff(monthAgo, 'day') > -1
      })
    default:
      return filteredList
  }
}
