import React, { MouseEvent, ReactNode } from 'react'
import { Button } from 'reactstrap'

type PropsType = {
  active: boolean
  children: ReactNode
  onClickFilterByVisibility(e: MouseEvent<HTMLButtonElement>): void
}

const Link = ({ active, children, onClickFilterByVisibility }: PropsType) => (
    <Button
      color='info'
      onClick={onClickFilterByVisibility}
      disabled={active}
    >
      {children}
    </Button>
)

export default Link
