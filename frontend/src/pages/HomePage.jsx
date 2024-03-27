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

    const getUserProfileRepos = async (username = 'jhoemsoftware') => { //AzKalashnikov
        try {
            const userRes = await fetch(`https://api.github.com/users/${username}`);
            const dataUserProfile = await userRes.json();

            await new Promise(resolve => setTimeout(resolve, 1200));

            const reposRes = await fetch(dataUserProfile.repos_url);
            const dataReposUser = await reposRes.json();

            return { dataUserProfile, dataReposUser }
        } catch (error) {
            toast.error(`I don't get information ${error.message}`);
        }
    }

    useEffect(() => {
        getUserProfileRepos();
    }, []);

    const onSearch = async (e, username) => {
        e.preventDefault();
        setLoading(true);
        setRepos([]);
        setUserProfile(null);

        const { dataUserProfile, dataReposUser } = await getUserProfileRepos(username);

        // console.log(dataUserProfile);
        // console.log(dataReposUser);
        toast.success(`Hi 👋🏻 ${dataUserProfile.name}`);

        setUserProfile(dataUserProfile);
        setRepos(dataReposUser);
        setLoading(false)
    }

    const onSort = (sortType = 'recent') => {
        if (sortType === 'stars') {
            repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
        } else if (sortType === 'forks') {
            repos.sort((a, b) => b.forks_count - a.forks_count);
        } else if (sortType === 'recent') {
            repos.sort((a, b) => (new Date(b.created_at)) - (new Date(a.created_at)));
        }

        setSortType(sortType);
        setRepos([...repos]);
    }

    return (
        <div className="m-4">
            <Search onSearch={onSearch} />
            {
                repos.length > 0 && <SortRepos sortType={sortType} onSort={onSort} />
            }
            <div className="flex flex-col gap-4 justify-center items-start lg:flex-row">
                {
                    loading &&
                    <Spinner />
                }
                {
                    !loading && (
                        <>
                            <ProfileInfo userProfile={userProfile} />
                            <Repos repos={repos} />
                        </>
                    )
                }
            </div>
        </div>
    )
}
