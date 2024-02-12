import React from 'react'
import Navbar from '../components/navbar'
import Herosection from '../components/herosection'
import Catogeries from '../components/catogeries'
import TopProducts from '../components/topProducts'
import Chevron from '../components/chevron'
import PetCareService from './petCareService'

function LandingPge() {
    return (
        <div style={{
            backgroundColor: "#F5CFCF "
        }} className='w-full h-auto flex flex-col items-center justify-start rounded-t-xl'>
            <Navbar />
            <div className='sticky top-0 z-10 w-full'>

            <Herosection/>
            <Catogeries/>
    {/* <svg xmlns="http://www.w3.org/2000/svg" className='z-10' viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L26.7,256C53.3,224,107,160,160,165.3C213.3,171,267,245,320,261.3C373.3,277,427,235,480,213.3C533.3,192,587,192,640,197.3C693.3,203,747,213,800,202.7C853.3,192,907,160,960,149.3C1013.3,139,1067,149,1120,160C1173.3,171,1227,181,1280,181.3C1333.3,181,1387,171,1413,165.3L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg> */}

            
            </div>
           
            <PetCareService/>
            <TopProducts/>
        </div>
    )
}

export default LandingPge