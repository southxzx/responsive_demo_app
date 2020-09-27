import React from 'react'
import HeroSection from '../../heroSection/HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'


function Home() {
    return (
        <div>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjTwo}/>
            <HeroSection {...homeObjThree}/>
        </div>
    )
}

export default Home
