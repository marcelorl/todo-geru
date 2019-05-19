import React from 'react'
import { Container } from 'reactstrap'

import Header from '../../molecules/Header'
import Footer from '../../molecules/Footer'
import SearchTodo from '../../../containers/SearchTodo'
import VisibleTodoList from '../../../containers/VisibleTodoList'

const App = () => (
  <Container>
    <Header />
    <SearchTodo />
    <VisibleTodoList />
    <Footer />
  </Container>
)

export default App
