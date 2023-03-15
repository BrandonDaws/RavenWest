import Image from "next/image";
import hero from '../assets/hero.jpeg';


export default function Hero() {
    return(
        <Image src={hero} className='w-full' alt="Hero-image"/>
    );
} 