import React, { memo, MouseEvent, ReactNode } from 'react'
import { Button } from 'reactstrap'

type PropTypes = {
  active: boolean
  children: ReactNode
  onClickFilter(e: MouseEvent<HTMLButtonElement>): void
}

const Link = ({ active, children, onClickFilter }: PropTypes) => (
    <Button
      color='info'
      onClick={onClickFilter}
      disabled={active}
    >
      {children}
    </Button>
)

export default memo(Link)
