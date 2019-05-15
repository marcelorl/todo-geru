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
            All
          </FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
          </FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
          </FilterLink>
        </ButtonGroup>
      </div>
    </Col>
  </Row>
)

export default Footer
