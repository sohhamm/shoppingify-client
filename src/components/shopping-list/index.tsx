/* eslint-disable @next/next/no-img-element */
import * as React from 'react'

interface ShoppingListProps {}

export default function ShoppingList({}: ShoppingListProps) {
  return (
    <section className="fixed top-0 right-0 h-full w-[389px] flex flex-col justify-between bg-[#FFF0DE] px-[40px] pt-[43px]">
      <div className="w-full h-[130px] rounded-[24px] bg-[#80485B] relative">
        <img
          src="/source.svg"
          alt="source logo"
          className="mt-[-16px] ml-[11px] inline-block"
        />
        <div className="inline-block">
          <p className="text-white">Didn’t find what you need?</p>
          <button className="rounded-[12px] bg-white text-[#34333A] px-[29px] py-[11px]">
            Add item
          </button>
        </div>
      </div>
    </section>
  )
}
