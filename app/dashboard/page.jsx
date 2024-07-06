import Link from "next/link";
import Image from "next/image";
import { CiCirclePlus,CiWallet } from "react-icons/ci";
import { BiCabinet } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Dashboard () {
    return (
        <main className="min-h-[480px] grid md:grid-cols-2 md:gap-8 lg:gap-12 px-3 md:px-12 lg:px-24 py-12">
            <section className="grid grid-cols-2 grid-rows-2 gap-3 p-1">
                <button className={styles.btn}>
                    <CiCirclePlus className={styles.iconStyle}/>
                    <span className={styles.btnText}>Create</span>
                </button>
                <button className={styles.btn}>
                    <BiCabinet className={styles.iconStyle}/>
                    <span className={styles.btnText}>Assets</span>
                </button>
                <button className={styles.btn}>
                    <IoSettingsOutline className={styles.iconStyle}/>
                    <span className={styles.btnText}>Manage</span>
                </button>
                <button className={styles.btn}>
                    <FaRegUserCircle className={styles.iconStyle}/>
                    <span className={styles.btnText}>Profile</span>
                </button>
            </section>
            
            <aside className="flex flex-col gap-8 p-4 rounded-lg border border-[#B6BBC4]">
                <blockquote className="border-b border-[#B6BBC4] pb-2">
                    <p className="uppercase text-2xl text-[#161A30]">My Portfolio</p>
                </blockquote>
                
                <ul>
                    <li className="min-h-[54px] flex justify-between items-center bg-[#161A30] rounded-lg p-3">
                        <blockquote className="flex items-center gap-1">
                            <Image 
                            width={40} 
                            height={40} 
                            src="/portfolio.jpg" 
                            alt="asset image"
                            className="rounded-lg"/>
                            <span className="text-[#F0ECE5] uppercase">Bitcoin</span>
                        </blockquote>

                        <span className="text-[#F0ECE5] uppercase">15 BTC</span>

                        <blockquote className="flex items-center gap-1">
                            <CiWallet className="text-[#F0ECE5]"/>
                            <span className="text-[#F0ECE5] text-sm">..ft5j</span>
                        </blockquote>

                        <blockquote>
                            <BsBoxArrowUpRight className="text-3xl text-[#F0ECE5]"/>
                        </blockquote>
                    </li>
                </ul>
            </aside>
        </main>
    )
}

const styles = {
    btn:"flex flex-col justify-center items-center gap-3 bg-[#A91D3A] rounded-lg p-4",
    iconStyle:"text-[#F0ECE5] text-5xl",
    btnText: "text-[#F0ECE5] text-2xl uppercase"
}