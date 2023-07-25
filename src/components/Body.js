import React from 'react'
import Button from './Button'

export default function Body() {

    return (
        <div className="grid grid-rows-4 grid-flow-col gap-4">
            <div className="row-span-4 ...">
                <img src='../images/Thousand-02 1.png' alt="bodyimage" />
            </div>
            <div class="col-span-2 ..."></div>
            <div class=" ...">
                <h2 className='text-3xl text-left font-playfair font-bold'>A new way to explore the world</h2>
                <p className='text-left py-4'>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
                    trip, but now, they can also let Lonely Planet Experiences lead the way</p>
            </div>
            <div class="text-left col-span-2 ...">
                <Button text="Learn more" styleName="font-inter text-white bg-amber-500 py-2 px-6 rounded-lg mr-1" />
            </div>
        </div>
    )
}



