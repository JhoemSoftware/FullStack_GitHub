import { useEffect, useState } from 'react';
import { Search } from './../components/Search';
import { SortRepos } from './../components/SortRepos';
import { ProfileInfo } from './../components/ProfileInfo';
import { Repos } from './../components/Repos';
import { toast } from 'react-hot-toast';

export const HomePage = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortType, setSortType] = useState('recent');

    const getUserProfileRepos = async (username = 'cataru25') => {
        setLoading(true);
        try {
            const userRes = await fetch(`https://api.github.com/users/${username}`);
            const dataUserProfile = await userRes.json();
            toast.success(`Hi 👋🏻 ${dataUserProfile.name}`)
            console.log(dataUserProfile)
            setUserProfile(dataUserProfile);

            const reposRes = await fetch(dataUserProfile.repos_url);
            const dataReposUser = await reposRes.json();
            console.log(dataReposUser)
            setRepos(dataReposUser);

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
                <ProfileInfo userProfile={ userProfile } />
                <Repos repos={ repos } />
            </div>
        </div>
    )
}
