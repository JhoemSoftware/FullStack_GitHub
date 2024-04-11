import { useEffect, useState, useCallback } from 'react';
import { Search, SortRepos, ProfileInfo, Repos, Spinner } from './../components/';
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

export const HomePage = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortType, setSortType] = useState('recent');
    const { authUser } = useAuthContext();

    const getUserProfileRepos = useCallback(async (username = 'jhoemsoftware') => {
        setLoading(true);
        
        try {
            const res = await fetch(`http://localhost:8500/api/users/profile/${username}`, {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
            const { dataUserProfile, dataReposUser } = await res.json();

            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setUserProfile(dataUserProfile);
            dataReposUser.sort((a, b) => (new Date(b.created_at)) - (new Date(a.created_at)));
            setRepos(dataReposUser);

            return { dataUserProfile, dataReposUser }
        } catch (error) {
            console.error(error.message)
            toast.error(`I don't get information for ${username}`);
        } finally {
            setLoading(false);
        }
    }, []);

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

        toast.success(`Hi 👋🏻 ${username}`);

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