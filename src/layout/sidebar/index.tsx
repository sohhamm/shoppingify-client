/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import Tabs from './Tabs'
import {MdOutlineShoppingCart} from 'react-icons/md'

interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  return (
    <aside className="fixed top-0 left-0 h-full w-[94px] flex flex-col justify-between">
      <img
        src={'/logo.svg'}
        className="mt-[54px] mx-[auto]"
        alt="shoppingify logo"
      />
      <Tabs />
      <div className="bg-[#F9A109] w-[42px] h-[42px] mb-[35px] mx-[auto] rounded-[50%] flex justify-center items-center">
        <span>
          <MdOutlineShoppingCart
            style={{
              filter:
                'invert(100%) sepia(100%) saturate(2%) hue-rotate(213deg) brightness(105%) contrast(101%)',
              width: '25px',
              height: '25px',
            }}
          />
        </span>
      </div>
    </aside>
  )
}
