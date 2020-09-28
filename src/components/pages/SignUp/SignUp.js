import React from 'react'
import HeroSection from '../../heroSection/HeroSection'
import Pricing from '../../pricing/Pricing'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'


function SignUp() {
    return (
        <div>
            <HeroSection {...homeObjThree}/>
        </div>
    )
}

export default SignUp
