import { formatDateMember } from "../utils/utilities";
import { FaEye } from "react-icons/fa";
import { RiInformationFill, RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { FaLocationDot, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { SiGitlfs } from "react-icons/si";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineWork } from "react-icons/md";

export const ProfileInfo = ({ userProfile }) => {
    const dateMember = formatDateMember(userProfile?.created_at)

    return (
        <div className='lg:w-1/3 w-full flex flex-col gap-2 md:sticky md:top-10'>
            <div className='bg-glass rounded-lg p-4'>
                <div className='flex gap-4 items-center'>
                    <img src={userProfile?.avatar_url} className='rounded-2xl border border-gray-700 w-24 h-24 mb-2' alt='Github Avatar' />
                    <div className='flex gap-2 items-center flex-col'>
                        <a
                            href={userProfile?.html_url}
                            target='_blank'
                            rel='noreferrer'
                            className='bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2 hover:bg-emerald-500 hover:border-emerald-500'
                        >
                            <FaEye size={16} />
                            View on Github
                        </a>
                    </div>
                </div>

                {userProfile?.name && (
                    <div className='my-2'>
                        <p className='text-gray-600 font-bold text-sm'>Full name</p>
                        <p className='font-bold text-xl'>{userProfile?.name}</p>
                    </div>
                )}

                <div className='my-4'>
                    <p className='text-gray-600 font-bold text-sm'>Username</p>
                    <p className='font-bold text-xl'>{userProfile?.login}</p>
                </div>

                {userProfile?.bio ? (
                    <div className='flex items-center gap-2'>
                        <RiInformationFill />
                        <p className='text-sm'>{userProfile?.bio}</p>
                    </div>
                ) : null}

                {userProfile?.location ? (
                    <div className='flex items-center gap-2'>
                        <FaLocationDot />
                        {userProfile?.location}
                    </div>
                ) : null}

                <div className='my-2'>
                    <p className='text-gray-600 font-bold text-sm'>Member since</p>
                    <p className=''>{dateMember}</p>
                </div>

                <div className='my-2'>
                    <p className='text-gray-600 font-bold text-sm'>Sites</p>
                    {userProfile?.twitter_username ? (
                        <a
                            href={`https://twitter.com/${userProfile.twitter_username}`}
                            target='_blank'
                            rel='noreferrer'
                            className='flex items-center gap-2 hover:text-sky-500'
                        >
                            <FaSquareXTwitter />
                            {userProfile?.twitter_username}
                        </a>
                    ) : null}

                    {/* {userProfile?.linkedin_username ? (
                    <a
                        href={`https://www.linkedin.com/${userProfile.linkedin_username}`}
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center gap-2 hover:text-sky-500'
                    >
                        <FaLinkedin />
                        {userProfile?.linkedin_username}
                    </a>
                ) : null} */}

                    {userProfile?.blog ? (
                        <a
                            href={userProfile.blog}
                            target='_blank'
                            rel='noreferrer'
                            className='flex items-center gap-2 hover:text-sky-500'
                        >
                            <TfiWorld />
                            {userProfile?.blog}
                        </a>
                    ) : null}

                    {userProfile?.company ? (
                        <div className='flex items-center gap-2 hover:text-sky-500'>
                            <MdOutlineWork />
                            {userProfile?.company}
                        </div>
                    ) : null}

                    {userProfile?.email && (
                        <div className='my-2'>
                            <p className='text-gray-600 font-bold text-sm'>Email address</p>
                            <p className=''>{userProfile.email}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className='flex flex-wrap gap-2 mx-4'>
                {/* Followers Count */}
                <div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
                    <RiUserFollowFill className='w-5 h-5 text-blue-800' />
                    <p className='text-xs'>Followers: {userProfile?.followers}</p>
                </div>

                {/* Following count */}
                <div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
                    <RiUserFollowLine className='w-5 h-5 text-blue-800' />
                    <p className='text-xs'>Following: {userProfile?.following}</p>
                </div>

                {/* Number of public repos */}
                <div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
                    <SiGitlfs className='w-5 h-5 text-blue-800' />
                    <p className='text-xs'>Public repos: {userProfile?.public_repos}</p>
                </div>

                {/* Number of public gists */}
                <div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
                    <LiaDigitalTachographSolid className='w-5 h-5 text-blue-800' />
                    <p className='text-xs'>Public gists: {userProfile?.public_gist}</p>
                </div>
            </div>
        </div>
    )
}
