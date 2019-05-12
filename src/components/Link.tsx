import React, { MouseEvent, ReactNode } from 'react'

type Props = {
  active: boolean
  children: ReactNode
  onClick(e: MouseEvent<HTMLButtonElement>): void
}

const Link = ({ active, children, onClick }: Props) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

export default Link
