import { FaGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Authentication() {
    return (
        <main className="h-screen px-3 md:px-12 lg:px-16  bg-white flex justify-center items-center">
            <section className="md:w-[380px] p-3  border border-slate-400 rounded-lg p-3 pb-5">
                <h1 className="text-black text-1xl font-medium ">Whether you are a new or an existing user, sign in to continue to your accout </h1>
                <div className="mt-[30px] grid grid-cols-1 gap-4">
                    <Link className="flex justify-center items-center gap-2  border border-slate-400 rounded-lg p-3 font-medium" href="?"><FcGoogle className="text-4xl" />Google</Link>
                    <Link className="flex justify-center items-center gap-2  border border-slate-400 rounded-lg p-3 font-medium" href="?"><FaGithub className="text-4xl" />GitHub</Link>
                    <Link className="flex justify-center items-center gap-2  border border-slate-400 rounded-lg p-3 font-medium" href="?"><BsTwitterX className="text-4xl" />Twitter</Link>
                </div>
            </section>
        </main>
    )
}