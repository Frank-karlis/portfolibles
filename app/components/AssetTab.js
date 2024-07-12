import Image from "next/image"
import { BsBoxArrowUpRight } from "react-icons/bs";
import {CiWallet } from "react-icons/ci";
import{FaTrash} from "react-icons/fa"
import { db } from "@/lib/firebase.setting";
import{deleteDoc, doc} from "firebase/firestore"


export function AssetTab( {id,title,qty,tick,holdWallet}) {
    const handleDelete= async () =>{
        await deleteDoc (doc(db,'assets',id)
        .then(() => alert('Asset have been deleted'))
        .catch(e => console.error(e))
)
    }
    return (
        <div className="min-h-[54px] flex justify-between items-center bg-[#161A30] rounded-lg p-3">
            <blockquote className="flex items-center gap-1">
                <Image
                    width={36}
                    height={36}
                    src="/portfolio.jpg"
                    alt="asset image"
                    className="rounded-lg" />
                <span className="text-[#F0ECE5] text-xs uppercase">{title}</span>
            </blockquote>

            <span className="text-[#F0ECE5] text-xs uppercase">{qty} {tick}</span>

            <blockquote className="flex items-center text-xs gap-1">
                <CiWallet className="text-[#F0ECE5]" />
                <span className="text-[#F0ECE5] ">{holdWallet.substr(holdWallet.lenght-4)}</span>
            </blockquote>

            <blockquote className="flex item-center gap-3">
                <BsBoxArrowUpRight className="text-xl text-[#F0ECE5]" />
                <FaTrash 
                onclick={handleDelete}
                className="text-xl text-[#F0ECE5]" />
            </blockquote>
        </div>
    )
}