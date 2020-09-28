import React from 'react'
import HeroSection from '../../heroSection/HeroSection'
import Pricing from '../../pricing/Pricing'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'


function Products() {
    return (
        <div>
            <HeroSection {...homeObjTwo}/>
        </div>
    )
}

export default Products
