import { MdOutlineWatchLater } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { CgGitFork } from "react-icons/cg";

export const SortRepos = ({ onSort, sortType }) => {
    return (
        <div className="mb-2 flex justify-center lg:justify-end">
            <button onClick={ () => onSort('recent') } className={`py-2 px-5 me-2 mb-2 text-xs font-medium rounded-lg bg-glass border border-gray-700 outline-none sm:text-sm ${ sortType === 'recent' ? " bg-colored" : "" }`}>
                <MdOutlineWatchLater size={18} className="mx-2 inline"/>
                Most Recent
            </button>
            <button onClick={ () => onSort('stars') } className={`py-2 px-5 me-2 mb-2 text-xs font-medium rounded-lg bg-glass border border-gray-700 outline-none sm:text-sm ${ sortType === 'stars' ? " bg-colored" : "" }`}>
                <GiStarsStack size={17} className="mx-2 inline" />
                Most Starts
            </button>
            <button onClick={ () => onSort('forks') } className={`py-2 px-5 me-2 mb-2 text-xs font-medium rounded-lg bg-glass border border-gray-700 outline-none sm:text-sm ${ sortType === 'forks' ? " bg-colored" : "" }`}>
                <CgGitFork size={20} className="mx-2 inline"/>
                Most Forks
            </button>
        </div>
    )
}
