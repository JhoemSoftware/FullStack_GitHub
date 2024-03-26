import { formatDateMember, validateLanguage } from "../utils/utilities";
import { FaCodeBranch, FaCopy, FaRegStar, FaEye } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { toast } from 'react-hot-toast';

export const Repo = ({ name, html_url, description, language, dateRepo, forks_count, stargazers_count, clone_url, watchers }) => {
    const imageLang = validateLanguage(language)
    dateRepo = formatDateMember(dateRepo);

    const handleCloneRepo = async ( clone_url ) => {
        console.log(clone_url)
        try {
            await navigator.clipboard.writeText(clone_url);
            toast.success('Repository URL copied success ✅');
        } catch (error) {
            toast.success('Repository URL copied failed 🤔', error);
        }
    }

    return (
        <li className='mb-12 ms-6' key={name}>
            <span
                className='absolute flex items-center justify-center w-6 h-6 bg-white
			rounded-full -start-3 ring-8 ring-white'
            >
                <FaCodeBranch className='w-5 h-5 text-emerald-400' />
            </span>

            <div className='flex gap-2 items-start mb-3 flex-col flex-wrap'>
                <a
                    href={html_url}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2 text-lg font-semibold'
                >
                    {name.toUpperCase()}
                </a>
                <div className="flex gap-1">
                    <span
                        className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5
					py-0.5 rounded-full flex items-center gap-1'
                    >
                        <FaRegStar /> {stargazers_count}
                    </span>
                    <span
                        className='bg-purple-100 text-purple-800 text-xs font-medium
					 px-2.5 py-0.5 rounded-full flex items-center gap-1'
                    >
                        <FaCodeFork /> {forks_count}
                    </span>
                    <span
                        className='bg-blue-100 text-blue-800 text-xs font-medium
					 px-2.5 py-0.5 rounded-full flex items-center gap-1'
                    >
                        <FaEye /> {watchers}
                    </span>
                    <span
                        onClick={ () => handleCloneRepo(clone_url) }
                        className='cursor-pointer bg-green-100 text-green-800 text-xs
					font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'
                    >
                        <FaCopy /> Copy URL Repository{/* clone_url */}
                    </span>
                </div>
            </div>

            <time
                className='block my-1 text-xs font-normal leading-none
			 text-gray-400'
            >
                Released on {dateRepo}
            </time>

            <p className='mb-4 text-base font-normal text-gray-500'>{description}</p>

            <img src={imageLang} alt='Programming language icon' className='h-9 w-9' />
        </li>
    )
}
