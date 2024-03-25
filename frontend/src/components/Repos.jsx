import { Repo } from './Repo'

export const Repos = ({ repos }) => {
    console.log(repos)
    return (
        <div className="lg:2/3 w-full bg-glass rounded-lg px-8 py-6">
            <ol className="relative border-s border-gray-200">
                {
                    repos.map( r => <Repo name={ r.name } description={ r.description } language={ r.language }/> )
                }
            </ol>
        </div>
    )
}