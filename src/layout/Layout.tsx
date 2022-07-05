import * as React from 'react'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: JSX.Element
}

export default function Layout({children}: LayoutProps) {
  return (
    <div>
      <Sidebar />
      <div className="ml-[94px]">{children}</div>
    </div>
  )
}
