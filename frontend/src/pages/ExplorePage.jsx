import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Spinner, Repos } from './../components/';

export const ExplorePage = () => {
    // 
    const [loading, setLoading] = useState(false);
    const [repositories, setRepositories] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const exploreRepos = async (language = '') => {
        setLoading(true);
        setRepositories([]);
        try {
            const res = await fetch(`http://localhost:8500/api/explore/repositories/${language}`);
            const { dataRepos } = await res.json();

            await new Promise(resolve => setTimeout(resolve, 1000));

            setRepositories(dataRepos.items);
            setSelectedLanguage(language)
        } catch (error) {
            console.error(error.message)
            toast.error(`I don't get information for ${language}`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="px-4">
            <div className="bg-glass w-3/4 mx-auto p-5 border border-gray-700 flex flex-col items-center gap-3 mb-2">
                <h1 className="text-xl text-center">Explore Popular Repositories</h1>
                <div className="flex gap-2 flex-wrap items-center justify-center">
                    {/* TODO: Refactor img para no repetir código */}
                    <img
                        src="./javascript.svg"
                        alt="JS Logo"
                        className="w-12 h-12 cursor-pointer"
                        onClick={() => exploreRepos('javascript')}
                    />
                    <img
                        src="./typescript.svg"
                        alt="TS Logo"
                        className="w-12 h-12 cursor-pointer"
                        onClick={() => exploreRepos('typescript')}
                    />
                    <img
                        src="./vue.svg"
                        alt="VUE Logo"
                        className="w-12 h-12 cursor-pointer"
                        onClick={() => exploreRepos('vue')}
                    />
                    <img
                        src="./python.svg"
                        alt="PY Logo"
                        className="w-12 h-12 cursor-pointer"
                        onClick={() => exploreRepos('python')}
                    />
                    <img
                        src="./java.svg"
                        alt="JAVA Logo"
                        className="w-12 h-12 cursor-pointer"
                        onClick={() => exploreRepos('java')}
                    />
                    <img
                        src="./rust.svg"
                        alt="RUST Logo"
                        className="w-12 h-12 cursor-pointer"
                        onClick={() => exploreRepos('rust')}
                    />
                    <img
                        src="./go.svg"
                        alt="Golang Logo"
                        className="w-12 h-12 cursor-pointer"
                        onClick={() => exploreRepos('go')}
                    />
                    <img
                        src="./php.svg"
                        alt="PHP Logo"
                        className="w-12 h-12 cursor-pointer"
                        onClick={() => exploreRepos('php')}
                    />
                    <img
                        src="./swift.svg"
                        alt="Swift Logo"
                        className="w-12 h-12 cursor-pointer"
                        onClick={() => exploreRepos('swift')}
                    />
                    <img
                        src="./css.svg"
                        alt="CSS Logo"
                        className="w-12 h-12 cursor-pointer"
                        onClick={() => exploreRepos('css')}
                    />
                    <img
                        src="./shell.svg"
                        alt="Bash Logo"
                        className="w-12 h-12 cursor-pointer"
                        onClick={() => exploreRepos('bash')}
                    />
                    <img
                        src="./c.svg"
                        alt="C Logo"
                        className="w-12 h-12 cursor-pointer"
                        onClick={() => exploreRepos('c')}
                    />
                    <img
                        src="./csharp.svg"
                        alt="C# Logo"
                        className="w-12 h-12 cursor-pointer"
                        onClick={() => exploreRepos('csharp')}
                    />
                </div>
            </div>
            {loading && <Spinner />}
            {
                repositories.length > 0 &&
                <div className="flex flex-col items-center justify-center px-12">
                    <h2 className="text-lg bg-colored font-semibold my-4">
                        <span className="">
                            {selectedLanguage.toUpperCase()}{" "}
                        </span>
                        Repositories
                    </h2>
                    <Repos repos={repositories} />
                </div>
            }
        </div>
    )
}