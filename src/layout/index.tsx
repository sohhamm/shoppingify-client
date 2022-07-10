import ShoppingList from '@/components/shopping-list'
import * as React from 'react'
import Sidebar from './sidebar'

interface LayoutProps {
  children: JSX.Element
}

export default function Layout({children}: LayoutProps) {
  return (
    <div>
      <Sidebar />
      <div className="ml-[94px] bg-[#FAFAFE] min-h-[100vh]">{children}</div>
      <ShoppingList />
    </div>
  )
}
