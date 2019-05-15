import React from 'react'
import { ButtonGroup, Col, Row } from 'reactstrap'

import FilterLink from '../../../containers/FilterLink'
import { VisibilityFilters } from '../../../reducers/filters'

const Footer = () => (
  <Row>
    <Col xs='12'>
      <div className='mb-3 d-flex justify-content-between'>
        <ButtonGroup>
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
      </div>
    </Col>
  </Row>
)

export default Footer
