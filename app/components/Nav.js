import{ SiPhotobucket } from"react-icons/si";
import Link from "next/link";

export function Nav(){
    return(
        <nav className="flex justify-between items-center  bg-[#F0ECE5] py-3 px-3 md:px-12 lg:px-16">
         

            <SiPhotobucket className="text-[#31304D] text-3xl"/>

          <Link className="border-b-2 border-[#31304D] py-3 text-[#31304D] py-3 " href="/auth/signin"> Sign in</Link>
        </nav>
    )
}   