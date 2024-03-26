import { Repo } from './Repo';

export const Repos = ({ repos }) => {
    console.log(repos)
    return (
        <div className="lg:2/3 w-full bg-glass rounded-lg px-8 py-6">
            <ol className="relative border-s border-gray-200">
                {
                    repos.map( r => <Repo
                                        key={r.name}
                                        html_url={ r.html_url }
                                        name={ r.name }
                                        description={ r.description }
                                        language={ r.language }
                                        dateRepo={ r.created_at }
                                        forks_count={ r.forks_count }
                                        stargazers_count={ r.stargazers_count }
                                        clone_url={ r.clone_url }
                                        watchers={ r.watchers }
                                    /> )
                }
            </ol>
        </div>
    )
}