import React from 'react'
import HeroSection from '../../heroSection/HeroSection'
import Pricing from '../../pricing/Pricing'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'


function Home() {
    return (
        <div>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjTwo}/>
            <HeroSection {...homeObjThree}/>
            <Pricing/>
        </div>
    )
}

export default Home
