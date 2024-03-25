import { Search } from './../components/Search';
import { SortRepos } from './../components/SortRepos';
import { ProfileInfo } from './../components/ProfileInfo';
import { Repos } from './../components/Repos';

export const HomePage = () => {
    return (
        <div className="m-4">
            <Search />
            <SortRepos />
            <div className="flex flex-col gap-4 justify-center items-start lg:flex-row">
                <ProfileInfo />
                <Repos />
            </div>
        </div>
    )
}
