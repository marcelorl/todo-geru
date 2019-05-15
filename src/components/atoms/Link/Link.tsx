import React, { MouseEvent, ReactNode } from 'react'
import { Button } from 'reactstrap'

type PropsType = {
  active: boolean
  children: ReactNode
  onClickFilter(e: MouseEvent<HTMLButtonElement>): void
}

const Link = ({ active, children, onClickFilter }: PropsType) => (
    <Button
      color='info'
      onClick={onClickFilter}
      disabled={active}
    >
      {children}
    </Button>
)

export default Link
