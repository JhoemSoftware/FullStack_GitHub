import { AiFillGithub, AiFillUnlock } from "react-icons/ai";
import { Link } from "react-router-dom";

export const SignUpPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-glass border border-emerald-300 rounded-lg p-6 w-7/12 flex flex-col items-center gap-3">
                <h1 className="text-center text-2xl font-bold">Create Account</h1>
                <button className="bg-[#343d48] w-full py-2 rounded-md flex items-center gap-2 justify-center flex-wrap mt-5 duration-300 hover:bg-[#b1bcc9] hover:text-gray-800">
                    <AiFillGithub size={30}/>
                    Sign up with GitHub
                </button>
                <p className="text-gray-400 text-center text-sm">
                    By signing up, you will unlock all the features of the app.
                    <span><AiFillUnlock className="w-4 h-4 inline mx-1"/></span>
                </p>
                <p className="text-gray-500 text-sm font-light">
                    Already have a Account?{" "}
                    <Link to='/login' className="font-medium text-primary-600 text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}
