import React from 'react'
import DropDown from './DropDown'
import Button from './Button'

const HolidayFinder = () => {
  return (
    <div className='w-full'>
      <h1 className='flex text-4xl font-inter mx-1'> Holiday Finder</h1>
      <hr className="w-10 h-1 bg-black border-0 rounded mx-1" ></hr>
      <br></br>
      <div className="grid grid-cols-2 gap-1 w-full">
        <div className="py-2 mx-1 text-left">
          <DropDown text=' Location' />

        </div>
        <div className="py-2 mx-1 text-left">
          <DropDown text='Activity' />
        </div>
        <div className="py-2 mx-1 text-left">
          <DropDown text='Grade' />
        </div>
        <div className="py-2 mx-1 text-left">
          <DropDown text='Date' />
        </div>
        <div className='py-2 mx-1 text-left'>
          <Button text='Explore' styleName='font-inter text-white bg-amber-500 py-2 px-8 rounded-lg mr-3' /></div>
      </div>
    </div>
  )

}

export default HolidayFinder
