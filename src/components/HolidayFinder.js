import React from 'react'
import DropDown from './DropDown'

const HolidayFinder = () => {
  return (
    <div>
          <h1 className= 'flex text-4xl font-inter'> Holiday Finder</h1>
          <hr className ="w-10 h-1 bg-black border-0 rounded" ></hr> 
          <br></br>
          <div className = "grid grid-cols-2 gap-1">
            <div className = "py-2 mx-2">
                <DropDown text =' Location'/>
                  
            </div>
              <div className="py-2 mx-2">
                  <DropDown text ='Activity' />
              </div>
              <div className="py-2 mx-2">
                  <DropDown text = 'Grade' />
              </div>
              <div className="py-2 mx-2">
                  <DropDown text = 'Date' />
              </div>
          </div>
    </div>
  )
}

export default HolidayFinder
