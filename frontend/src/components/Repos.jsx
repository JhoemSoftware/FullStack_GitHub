import { Repo } from './index';
import { TbFaceIdError } from "react-icons/tb";

export const Repos = ({ repos }) => {
    return (
        <div className="lg:2/3 w-full bg-glass rounded-lg px-12 py-7">
            {
                repos.length === 0 &&
                <div className='text-bold text-center flex flex-col items-center gap-1'>
                    <TbFaceIdError size={100} className='text-red-600'/>
                    This account does not have public repositories
                </div>
            }
            <ol className="relative border-s border-gray-200">
                {
                    repos.map(r => <Repo
                        key={r.name}
                        html_url={r.html_url}
                        name={r.name}
                        description={r.description}
                        language={r.language}
                        dateRepo={r.created_at}
                        forks_count={r.forks_count}
                        stargazers_count={r.stargazers_count}
                        clone_url={r.clone_url}
                        watchers={r.watchers}
                    />)
                }
            </ol>
        </div>
    )
}