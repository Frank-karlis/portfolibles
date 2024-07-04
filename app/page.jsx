import { Footer } from "./components/Footer";
import Link from "next/link";
import{ SiPhotobucket } from"react-icons/si";
import{GrMoney} from "react-icons/gr";
import{TbTrack} from "react-icons/tb";
import{ GiProfit} from "react-icons/gi";
import{FaNoteSticky}from "react-icons/fa6";

export default function Home() {
  return ( 
    <main className="px-3 md:px-12 lg:px-16 bg-gradient-to-b from-[#F0ECE5] via-white to-[#B6BBC4]">
      <section className="min:h-screen md:h-screen flex flex-col justify-between gap-16 pb-12 md:gap-0">
        <nav className="flex justify-between items-center pt-3">
          <button className="text-sm md:text-lg text-[#31304D] flex flex-col md:flex-row md:gap-2 border border-[#31304D] rounded-md p-3 ">
            <span>Yield</span>
            <span> Calculator</span>
          </button>

            <SiPhotobucket className="text-[#31304D] text-3xl"/>

          <Link className="border-b-2 border-[#31304D] py-3 text-[#31304D] py-3 " href="#"> Sign in</Link>
        </nav>

        <div className="row-span-5 flex justify-center items-center">
        <blockquote className="w-full md:[480px] lg:w-[720px]">
          <h1 className="text-5xl md:text-6xl text-[#31104d] text-center font-bold">
            <span className="text-[#A91d3a]">Track</span> All Your Stock and Crypto Investment All One Place
          </h1>
        </blockquote>
        </div>

        <article  className="row-span-4 grid md:grid-cols-3 gap-4">
        <ul className=" flex flex-col gap-4 border border-[#A91d3a] rounded-lg p-4">
          <li className="flex gap-2 items-center">
            <GrMoney className="text-[#A91d3a] text-2xl md:text-5xl"/>
            <span className="text-[#31304d] text-2xl "> Yield Potential</span>
          </li>
          <li className="flex gap-2 items-center">
            <TbTrack className="text-[#A91d3a] text-2xl md:text-5xl"/>
            <span className="text-[#31304d] text-2xl "> Track Your Investment</span>
          </li>
          <li className="flex gap-2 items-center">
            <GiProfit className="text-[#A91d3a] text-2xl md:text-5 xl"/>
            <span className="text-[#31304d] text-2xl ">Profit Calculator</span>
          </li>
          <li className="flex gap-2 items-center">
            <FaNoteSticky className="text-[#A91d3a] text-2xl md:text-5 xl"/>
            <span className="text-[#31304d] text-2xl ">Keep Notes</span>
          </li>
        </ul>

        <div className="flex flex-col justify-around bg-[#A91D3a] rounded-lg p-4">
          <p className="text-4xl  text-[#F0ECE5]"> Use Quick Yield Caculator</p>
          <button className="bg-[#F0ECE5] rounded-lg w-full py-3 uppercase text-2xl text-[#161A30]">Calculate</button>
        </div>
        <div className="flex flex-col justify-around bg-[#A91D3a] rounded-lg p-4">
          <p className="text-4xl  text-[#F0ECE5]"> Start Tracking Your Investment now</p>
          <Link href='#' className="bg-[#F0ECE5] rounded-lg w-full py-3 uppercase text-2xl text-[#161A30]" >Get Started</Link>
        </div>
        </article>
      </section>
       
     
   </main>

  
  );
}
