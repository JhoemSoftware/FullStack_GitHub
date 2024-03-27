import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

export const LoginPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-glass border border-gray-500 rounded-lg p-6 w-7/12 flex flex-col items-center gap-5">
                <h1 className="text-center text-2xl font-bold">Login to your account</h1>
                <button className="bg-[#343d48] w-full py-2 rounded-md flex items-center gap-2 justify-center flex-wrap mt-5 duration-300 hover:bg-emerald-500 hover:text-white">
                    <AiFillGithub size={30}/>
                    Login with GitHub
                </button>
                <p className="text-gray-500 text-sm font-light">
                    Don't have a Account?{" "}
                    <Link to='/signup' className="font-medium text-primary-600 text-blue-500 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
}
