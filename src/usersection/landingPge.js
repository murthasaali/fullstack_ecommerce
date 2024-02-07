import React from 'react'
import Navbar from '../components/navbar'
import Herosection from '../components/herosection'
import Catogeries from '../components/catogeries'
import TopProducts from '../components/topProducts'
import Chevron from '../components/chevron'

function LandingPge() {
    return (
        <div style={{
            backgroundColor: "#F5CFCF "
        }} className='w-full h-auto flex flex-col items-center justify-start rounded-t-xl'>
            <Navbar />
            <div className='sticky top-0 z-10 w-full'>
            <Herosection/>
            <Catogeries/>
            </div>
           
            <TopProducts/>
        </div>
    )
}

export default LandingPge