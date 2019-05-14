import React from 'react'
import { Col, Row } from 'reactstrap'

import FilterLink from '../../../containers/FilterLink'
import { VisibilityFilters } from '../../../reducers/visibilityFilter'

const Footer = () => (
  <Row>
    <Col xs='12'>
      <div className='d-flex'>
        <div className='mr-1'>
          <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
          </FilterLink>
        </div>
        <div className='mr-1'>
          <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
          </FilterLink>
        </div>
        <div>
          <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
          </FilterLink>
        </div>
      </div>
    </Col>
  </Row>
)

export default Footer
