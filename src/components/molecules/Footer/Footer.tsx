import React from 'react'
import { ButtonGroup, Col, Row } from 'reactstrap'

import FilterLink from 'containers/FilterLink'
import FilterLinkByDays from 'containers/FilterLinkByDays'
import { DaysFilters, VisibilityFilters } from 'reducers/filters'

const Footer = () => (
  <Row>
    <Col xs='12'>
      <div className='d-flex flex-column flex-md-row justify-content-between'>
        <ButtonGroup className='mb-3'>
          <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            Todas
          </FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Ativas
          </FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completas
          </FilterLink>
        </ButtonGroup>

        <ButtonGroup className='mb-3'>
          <FilterLinkByDays filter={DaysFilters.SHOW_ALL}>
            Todas
          </FilterLinkByDays>
          <FilterLinkByDays filter={DaysFilters.TODAY}>
            Hoje
          </FilterLinkByDays>
          <FilterLinkByDays filter={DaysFilters['7_DAYS_AGO']}>
            Últimos 7 dias
          </FilterLinkByDays>
          <FilterLinkByDays filter={DaysFilters['30_DAYS_AGO']}>
            Últimos 30 dias
          </FilterLinkByDays>
        </ButtonGroup>
      </div>
    </Col>
  </Row>
)

export default Footer
