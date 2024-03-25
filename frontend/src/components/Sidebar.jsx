import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { RiHome2Fill, RiLoginCircleFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { MdPersonSearch, MdOutlinePostAdd } from "react-icons/md";
import { Logout } from "./Logout";

export const Sidebar = () => {
    const authUser = true;
    return (
        <aside className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 transition-all duration-500 hover:bg-gray-800 border-gray-700 text-white">
            <nav className="h-full flex flex-col items-center gap-3">
                <Link to='/' className="mb-10">
                    {/* <img className="h-8" src="./github.svg" alt="Github Logo" /> */}
                    <AiFillGithub size={30} />
                </Link>
                <Link to='/' className="transition-colors duration-300 py-2  hover:text-emerald-400">
                    <RiHome2Fill size={20} />
                </Link>
                {
                    authUser && (
                        <>
                            <Link to='/likes' className="transition-colors duration-300 py-2  hover:text-emerald-400">
                                <FaHeart size={18} />
                            </Link>
                            <Link to='/explore' className="transition-colors duration-300 py-2  hover:text-emerald-400">
                                <MdPersonSearch size={24} />
                            </Link>
                            <Link to='/' className="mt-auto">
                                <Logout />
                            </Link>
                        </>
                    )
                }
                {
                    !authUser && (
                        <>
                            <Link to='/login' className="transition-colors duration-300 py-2  hover:text-emerald-400">
                                <RiLoginCircleFill size={20} />
                            </Link>
                            <Link to='/signup' className="transition-colors duration-300 py-2  hover:text-emerald-400">
                                <MdOutlinePostAdd size={20} />
                            </Link>
                        </>
                    )
                }
            </nav>
        </aside>
    )
}