import React, { MouseEvent, ReactNode } from 'react'
import { Button } from 'reactstrap'

type PropsType = {
  active: boolean
  children: ReactNode
  onClick(e: MouseEvent<HTMLButtonElement>): void
}

const Link = ({ active, children, onClick }: PropsType) => (
    <Button
      color='info'
      onClick={onClick}
      disabled={active}
    >
      {children}
    </Button>
)

export default Link
