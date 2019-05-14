import React from 'react'
import { Container } from 'reactstrap'

import Footer from '../../molecules/Footer'
import AddTodo from '../../../containers/AddTodo'
import VisibleTodoList from '../../../containers/VisibleTodoList'

const App = () => (
  <Container>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Container>
)

export default App
