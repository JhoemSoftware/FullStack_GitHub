import { MdExitToApp } from "react-icons/md";
// TODO: Implement Logout funcionality

export const Logout = () => {
    return (
        <>
            <div className="flex flex-col gap-3 items-center">
                <img src="./jhoemGitHub.jpg" alt="GitHub Profile Image" className="w-10 h-10 rounded-full border border-gray-700" />
                <div className="transition-colors duration-300 py-2 border p-2 rounded-md bg-slate-800 hover:text-emerald-400 hover:bg-slate-600">
                    <MdExitToApp size={24} />
                </div>
            </div>
        </>
    )
}
