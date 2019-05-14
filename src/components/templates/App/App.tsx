import React from 'react'
import { Container } from 'reactstrap'

import Footer from '../../molecules/Footer'
import AddTodo from '../../../containers/AddTodo'
import VisibleTodoList from '../../../containers/VisibleTodoList'

const App = () => (
  <Container>
    <h1 className='mt-2 mb-4'>Todo GERU</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Container>
)

export default App
