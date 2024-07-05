import Link from "next/link";
import{CiCirclePlus} from "react-icons/ci"
import{BiCabinet} from "react-icons/bi"
import{IoSettingsOutline} from "react-icons/io5"
import{FaRegUserCircle} from "react-icons/fa"

export default function Dashboard (){
    return(
        <main className=" grid md:grid-cols-2 md :gap-8 lg:gap-12 px-3 md:px-12 lg:px-24  py-12">
                <section>
                    <button className={styles.btn}>
                        <CiCirclePlus/>
                        <span> Create </span>
                    </button>
                </section>

                <aside>

                </aside>
        </main>
    )
}

const stles={
    btn:" h-[200px] b",
}