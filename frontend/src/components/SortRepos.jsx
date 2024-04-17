import { MdOutlineWatchLater } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { CgGitFork } from "react-icons/cg";

export const SortRepos = ({ onSort, sortType }) => {
    // TODO: Refactorizar el código del button para no repetir
    return (
        <div className="mb-2 flex justify-center lg:justify-end">
            <button onClick={ () => onSort('recent') } className={`py-2 px-5 me-2 mb-2 text-xs rounded-lg bg-glass border border-gray-700 outline-none ${ sortType === 'recent' ? " bg-colored" : "" }`}>
                <MdOutlineWatchLater size={23} className="mx-auto mb-1"/>
                Most Recent
            </button>
            <button onClick={ () => onSort('stars') } className={`py-2 px-5 me-2 mb-2 text-xs rounded-lg bg-glass border border-gray-700 outline-none ${ sortType === 'stars' ? " bg-colored" : "" }`}>
                <GiStarsStack size={23} className="mx-auto mb-1" />
                Most Starts
            </button>
            <button onClick={ () => onSort('forks') } className={`py-2 px-5 me-2 mb-2 text-xs rounded-lg bg-glass border border-gray-700 outline-none ${ sortType === 'forks' ? " bg-colored" : "" }`}>
                <CgGitFork size={25} className="mx-auto mb-1"/>
                Most Forks
            </button>
        </div>
    )
}
