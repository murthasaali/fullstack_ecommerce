
import React from 'react';
import groom from '../assets/haircut.png'
import { motion } from 'framer-motion';
import Chevron from '../components/chevron';
import crak from '../assets/frames/frame1.png';
import { MdArrowForward, MdPause, MdPlayCircle } from 'react-icons/md';
import Button from '../components/button';
import { FaHouse } from 'react-icons/fa6';
import { MdOutlinePets } from "react-icons/md";
import dogsmile from '../assets/frames/dogsmile.png'
import cutting from '../assets/grom.png'
import star from '../assets/star.png'
function PetCareService() {
    return (<>
        <div className='md:p-10  p-0  w-full bg-pink-200   bg flex flex-col items-center  justify-start  z-30 rounded-t-3xl md:h-screen h-auto'>
           
            <Chevron />
            <img src={crak} className='w-32 h-24 absolute right-10' alt="crak" />
            <motion.p 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}className='w-full px-10'>
                <h1 className='md:w-[40%] w-[60%]  text-start md:text-6xl text-2xl font-thin'>We Give Preference to your pet</h1>
            </motion.p>
            <div 
            
            className='h-auto w-full flex justify-evenly flex-wrap p-10 '>
                <motion.div
                    className='md:w-[30%] w-full mt-1  md:h-[400px] h-[100px] rounded-3xl  flex-col flex '
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                <h1 className='w-[80%] text-transparent outlined-text  font-extrabold' style={{  WebkitTextStroke:"2px  #ffffff " /* Add the text outline effect */
}} >
                    Our Pet   Care Services
                </h1>
                <button  className='w-full md:text-xl text:xs md:py-4  p-0 font-thin text-start  transition-all border-opacity-75 duration-600 items-center hover:text-red-400 flex justify-between py-3  '><span>Pet Grooming</span> <MdArrowForward/></button >
                <button  className='w-full md:text-xl text:xs md:py-4  p-0  text-start font-thin  transition-all border-opacity-75 duration-600 items-center hover:text-red-400 flex justify-between py-3  '><span>Dog  agording Kennels</span> <MdArrowForward/></button >
                <button  className='w-full md:text-xl text:xs md:py-4  p-0  text-start font-thin  transition-all border-opacity-75 duration-600 items-center hover:text-red-400 flex justify-between py-3  '><span>Dog Training</span> <MdArrowForward/></button >
                <button  className='w-full md:text-xl text:xs md:py-4  p-0  text-start font-thin  transition-all border-opacity-75 duration-600 items-center hover:text-red-400 flex justify-between py-3  '><span>Walking and Sitting</span> <MdArrowForward/></button >
                <button  className='w-full md:text-xl text:xs md:py-4  p-0  text-start font-thin  transition-all border-opacity-75 duration-600 items-center hover:text-red-400 flex justify-between py-3  '><span>Dog Emergency Services</span> <MdArrowForward/></button >
                <button ></button >
                <button ></button >
                    
                </motion.div>
                <motion.div
                    className='md:w-[30%] flex flex-col w-full mt-1 bg-stone-200 p-3 border-stone-900 border-[2px] bg-opacity-80 md:h-[400px] h-[170px] rounded-3xl '
                    // style={{ boxShadow: 'inset 0 0 15px #000000' }}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    ><div className='w-full h-auto flex justify-start gap-2'>
                    <img src={groom} alt=""  className='h-10 w-10'/>
                    <h1 className=' text-xl font-extrabold'>Pet Grooming</h1>
                </div>
                <p className='mt-4'>At our pet grooming service, we understand the importance of keeping your furry friends looking and feeling their best. Our expert groomers provide top-notch care tailored to the specific needs of each pet, ensuring they receive the pampering they deserve.
                From luxurious baths to precision haircuts, we go above and beyond to enhance your pet's appearance and well-being. With meticulous attention to detail and a gentle touch, we guarantee a grooming experience that surpasses the rest </p>
                <Button height="12" content="add service"  icon={<MdOutlinePets/>}/>

                </motion.div>
                <motion.div
                    className='md:w-[30%] w-full mt-1 gap-3 md:h-[400px] h-[170px] rounded-3xl flex flex-col '
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    >
                    <div className='h-[55%] w-full bg-sky-500 rounded-lg bg-opacity-70  relative rounded-tr-[100px]'>
                        
                        <motion.img src={star} className='h-48 w-52 absolute top-[-50%] ' alt=''  whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.5 }}
      animate={{ y: [0, -10, 0], transition: { duration: 2.1, repeat: Infinity } }}/>
                        <img src={cutting} className='h-48 w-72 absolute right-[20%] bottom-0' alt=''/>
                    </div >
                    <div className='h-[45%] w-full bg-orange-400 rounded-lg relative '>
                        <img src={dogsmile} className='h-36 w-22 absolute right-0 bottom-0' alt=''/>
    <button className='absolute bottom-0 left-0 mb-2 ml-2 flex items-center gap-3 text-white '><MdPlayCircle  className='text-4xl hover:text-stone-500 transition-all duration-300 text-stone-200'/>  Play Video</button>
</div>


                </motion.div>
            </div>
        </div>
                    </>
    );
}

export default PetCareService;
