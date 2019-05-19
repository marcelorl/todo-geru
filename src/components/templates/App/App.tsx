import React from 'react'
import { Container } from 'reactstrap'

import Header from '../../molecules/Header'
import Footer from '../../molecules/Footer'
import RegisterNotificationId from '../../../containers/RegisterNotificationId'
import SearchTodo from '../../../containers/SearchTodo'
import VisibleTodoList from '../../../containers/VisibleTodoList'

const App = () => (
  <Container>
    <RegisterNotificationId />
    <Header />
    <SearchTodo />
    <VisibleTodoList />
    <Footer />
  </Container>
)

export default App
