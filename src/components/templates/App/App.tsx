import React, { lazy, Suspense } from 'react'
import { Container } from 'reactstrap'

import Header from 'components/molecules/Header'
import SearchTodo from 'containers/SearchTodo'

const Footer = lazy(() => import('components/molecules/Footer'))
const VisibleTodoList = lazy(() => import('containers/VisibleTodoList'))

const App = () => (
  <Container>
    <Header />
    <SearchTodo />
    <Suspense fallback={<div>Carregando lista</div>}>
      <VisibleTodoList />
      <Footer />
    </Suspense>
  </Container>
)

export default App
