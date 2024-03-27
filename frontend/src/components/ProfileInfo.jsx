import { formatDateMember } from "../utils/utilities";
import { FaEye } from "react-icons/fa";
import { RiInformationFill, RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { SiGitlfs } from "react-icons/si";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineWork } from "react-icons/md";
import { TbFaceIdError } from "react-icons/tb";

export const ProfileInfo = ({ userProfile }) => {
    const dateMember = formatDateMember(userProfile?.created_at)

    // TODO: Refactorizar el código para sólo mostrarse si existe información de usuario
    return (
        <div className='lg:w-1/3 w-full flex flex-col gap-2 md:sticky md:top-1'>
            <div className='bg-glass rounded-lg p-4 md:flex md:items-center md:flex-wrap md:gap-2 md:justify-evenly'>
                {
                    !userProfile &&
                    <div className="flex flex-col items-center">
                        <TbFaceIdError size={100} className='text-red-600' />
                        This account does not have public information
                    </div>
                }
                {
                    userProfile?.avatar_url && (
                        <div className='flex gap-1 flex-wrap justify-center mb-3 items-center md:flex-col'>
                            <img src={userProfile?.avatar_url} className='rounded-2xl w-32 lg:w-56 border border-gray-700 mb-2' alt='Github Avatar' />
                            <div>
                                <a
                                    href={userProfile?.html_url}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2 hover:bg-emerald-500 hover:border-emerald-500'
                                >
                                    <FaEye size={18} />
                                    View on Github
                                </a>
                            </div>
                        </div>
                    )
                }

                {userProfile?.name && (
                    <div className='flex items-start flex-col mb-3'>
                        <p className='text-emerald-400 font-semibold text-sm'>Full name</p>
                        <p className='font-semibold text-xl'>{userProfile?.name}</p>
                    </div>
                )}

                {
                    userProfile?.login &&
                    <div className='flex items-start flex-col mb-3'>
                        <p className='text-emerald-400 font-semibold text-sm'>Username</p>
                        <p className='font-semibold text-xl'>{userProfile?.login}</p>
                    </div>
                }

                {userProfile?.bio ? (
                    <div className='hidden lg:flex gap-1 items-center mx-auto'>
                        <RiInformationFill />
                        <p className="font-normal text-sm">{userProfile?.bio}</p>
                    </div>
                ) : null}

                {userProfile?.location ? (
                    <div className='hidden lg:flex gap-1 items-center mx-auto'>
                        <FaLocationDot />
                        <p className="font-normal text-sm">{userProfile?.location}</p>
                    </div>
                ) : null}

                {
                    userProfile && (
                        <>
                            <div className='hidden lg:flex gap-1 items-center mx-auto'>
                                <p className='text-emerald-400 font-semibold text-sm'>Member since</p>
                                <p className="font-light text-xs">{dateMember}</p>
                            </div>

                            <div className='my-2 flex flex-col items-start gap-1'>
                                <p className='text-emerald-400 font-semibold text-sm'>Sites</p>
                                {userProfile?.twitter_username ? (
                                    <a
                                        href={`https://twitter.com/${userProfile.twitter_username}`}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='flex items-center gap-2 hover:text-sky-500'
                                    >
                                        <FaSquareXTwitter />
                                        <p className="font-light text-xs">{userProfile?.twitter_username}</p>
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
                                        <p className="font-light text-xs">{userProfile?.blog}</p>
                                    </a>
                                ) : null}

                                {userProfile?.company ? (
                                    <div className='flex items-center gap-2 hover:text-sky-500'>
                                        <MdOutlineWork />
                                        <p className="font-light text-xs">{userProfile?.company}</p>
                                    </div>
                                ) : null}

                                {userProfile?.email && (
                                    <div className='my-2'>
                                        <p className='text-emerald-400 font-semibold text-sm'>Email address</p>
                                        <p className="font-light text-xs">{userProfile?.email}</p>
                                    </div>
                                )}
                            </div>
                        </>
                    )
                }

            </div>
            {
                userProfile &&
                <div className='flex flex-wrap gap-2 mx-4'>
                    <div className='flex items-center gap-2 bg-colored rounded-lg p-2 flex-1 min-w-24'>
                        <RiUserFollowFill className='w-5 h-5 text-sky-200' />
                        <p className='text-xs'>Followers: {userProfile?.followers}</p>
                    </div>

                    <div className='flex items-center gap-2 bg-colored rounded-lg p-2 flex-1 min-w-24'>
                        <RiUserFollowLine className='w-5 h-5 text-sky-200' />
                        <p className='text-xs'>Following: {userProfile?.following}</p>
                    </div>

                    <div className='flex items-center gap-2 bg-colored rounded-lg p-2 flex-1 min-w-24'>
                        <SiGitlfs className='w-5 h-5 text-sky-200' />
                        <p className='text-xs'>Public repos: {userProfile?.public_repos}</p>
                    </div>

                    <div className='flex items-center gap-2 bg-colored rounded-lg p-2 flex-1 min-w-24'>
                        <LiaDigitalTachographSolid className='w-5 h-5 text-sky-200' />
                        <p className='text-xs'>Public gists: {userProfile?.public_gists}</p>
                    </div>
                </div>
            }
        </div>
    )
}
