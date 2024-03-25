import { MdOutlineWatchLater } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { CgGitFork } from "react-icons/cg";

export const SortRepos = () => {
    return (
        <div className="mb-2 flex justify-center lg:justify-end">
            <button className="py-2 px-5 me-2 mb-2 text-xs font-medium rounded-lg bg-glass border border-gray-700 outline-none sm:text-sm">
                <MdOutlineWatchLater size={18} className="mx-2 inline"/>
                Most Recent
            </button>
            <button className="py-2 px-5 me-2 mb-2 text-xs font-medium rounded-lg bg-glass border border-gray-700 outline-none sm:text-sm">
                <GiStarsStack size={17} className="mx-2 inline" />
                Most Starts
            </button>
            <button className="py-2 px-5 me-2 mb-2 text-xs font-medium rounded-lg bg-glass border border-gray-700 outline-none sm:text-sm">
                <CgGitFork size={20} className="mx-2 inline"/>
                Most Forks
            </button>
        </div>
    )
}
