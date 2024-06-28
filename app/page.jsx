import Link from "next/link";
import{ SiPhotobucket } from"react-icons/si";
import {Chakra_Petch} from "next/font/google";

const chakraPetch400= Chakra_Petch({
  subsets:['latin'],
  weight:'400'
})
export default function Home() {
  return ( 
    <main className="px-3 md:px-12 lg:px-16 bg-gradient-to-b from-[#161A30] via-white to-[#161A30]">
      <div className="h-screen">
        <nav className="flex justify-between items-center pt-3">
          <button className={`${chakraPetch400.className} text-sm md:text-lg text-[#F0ECE5] flex flex-colmd:flex-row md:gap-2 border border-[#F0ECE5] rounded-md p-3 `}>
            <span>Yield</span>
            <span> Calculator</span>
          </button>

            <SiPhotobucket className="text-[#F0ECE5] text-3xl"/>

          <Link className={`${chakraPetch400.className} border-b-2 border-[#F0ECE5] py-3 text-[#F0ECE5] py-3`} href="#"> Sign in</Link>
        </nav>

        <blockquote></blockquote>

        <ul></ul>

      </div>
   </main>
  );
}
