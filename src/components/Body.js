import React from 'react'
import Button from './Button'

export default function Body() {

    return(
        <div>
            <h3>A new way to explore the world</h3>

            <div> For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
                trip, but now, they can also let Lonely Planet Experiences lead the way</div>
            <img src= '../images/public/images/Thousand-02 1.png' alt = "bodyimage"/>
            <Button text="Learn more" styleName= 'font-inter text-white bg-amber-500 py-2 px-8 rounded-lg mr-3'/>

        </div>
    )

}



