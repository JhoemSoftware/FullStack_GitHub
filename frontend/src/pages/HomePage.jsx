import { useEffect, useState } from 'react';
import { Search } from './../components/Search';
import { SortRepos } from './../components/SortRepos';
import { ProfileInfo } from './../components/ProfileInfo';
import { Repos } from './../components/Repos';
import { toast } from 'react-hot-toast';
import { Spinner } from '../components/Spinner';

export const HomePage = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortType, setSortType] = useState('recent');

    const getUserProfileRepos = async (username = 'AzKalashnikov') => {
        setLoading(true);
        try {
            const userRes = await fetch(`https://api.github.com/users/${username}`);
            const dataUserProfile = await userRes.json();

            await new Promise(resolve => setTimeout(resolve, 1500));

            setUserProfile(dataUserProfile);
            
            const reposRes = await fetch(dataUserProfile.repos_url);
            const dataReposUser = await reposRes.json();
            setRepos(dataReposUser);
            
            console.log(dataUserProfile);
            console.log(dataReposUser);
            toast.success(`Hi 👋🏻 ${dataUserProfile.name}`);
        } catch (error) {
            toast.error(`I don't get information ${error.message}`);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUserProfileRepos();
    }, [])


    return (
        <div className="m-4">
            <Search />
            <SortRepos />
            <div className="flex flex-col gap-4 justify-center items-start lg:flex-row">
                {
                    loading &&
                    <Spinner />
                }
                {
                    !loading && (
                        <>
                            <ProfileInfo userProfile={ userProfile } />
                            <Repos repos={ repos } />
                        </>
                    )
                }
            </div>
        </div>
    )
}
