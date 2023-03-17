import {RiFacebookFill} from 'react-icons/ri';
import {BsInstagram} from 'react-icons/bs';
import {MdMail} from 'react-icons/md';
import Image from 'next/image';
import RWLogo from 'assets/RWLogo.png';
import phone from 'assets/phone.png';

export default function Hero() {
    return(
        <section className='bg-gradient-to-r from-Lgtpurp via-teal to-Drkpurp'>
        <section className=" flex  text-white ">

            <div className=' flex container justify-center'>
         <button className='p-10 '>   <RiFacebookFill size='80px'className='border-solid border-white border-2 rounded-full p-4'></RiFacebookFill> </button>
         <button className='p-10'>   <BsInstagram size='80px' className='border-solid border-white border-2 rounded-full p-4'></BsInstagram> </button>
         <button className='p-10'>   <MdMail size='80px' className='border-solid border-white border-2 rounded-full p-4'></MdMail> </button>
              </div>

              <div className='container flex justify-center' >
              <Image src={RWLogo}
              alt='RW logo' className='w-[550px]' ></Image>
              </div>
              
            <div className='flex container justify-center pt-28 '>
                <span>
            <button className='border-solid border-white border-2 p-6 rounded-full bg-white text-Drkblue font-extrabold text-xl'> SCHEDULE A PHONE CONSULTATION</button>
            </span>
            </div>
               </section>  
               <section className=" text-white "> 
            <div className="p-14">
                <ul className="flex flex-row justify-between text-3xl">
                 <button> <li>Websites</li> </button>   
                 <button> <li>Branding & Design</li> </button> 
                 <button> <li>Marketing</li> </button> 
                 <button> <li>Small Business Packages</li> </button> 
                 <button> <li>Contact</li> </button> 
                </ul>
            </div>
            </section>
            <div className='flex flex-row pl-20'>
            <Image
                src={phone}
                ></Image>

                <h1 className='text-9xl pt-20 text-white'>SOPHISTICATED BRANDING <br/> & MARKETING SOLUTIONS</h1>
                </div>
                 
              


            </section>
               
        
    )
} 