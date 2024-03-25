export const ExplorePage = () => {
    return (
        <div className="bg-glass max-w-2xl mx-auto p-5 border border-gray-700 flex flex-col items-center gap-5">
            <h1 className="text-xl">Explore Popular Repositories</h1>
            <div className="flex gap-3">
                <img src="./javascript.svg" alt="JS Logo" className="w-12 h-12 cursor-pointer" />
                <img src="./typescript.svg" alt="TS Logo" className="w-12 h-12 cursor-pointer" />
                <img src="./c++.svg" alt="C++ Logo" className="w-12 h-12 cursor-pointer" />
                <img src="./python.svg" alt="PY Logo" className="w-12 h-12 cursor-pointer" />
                <img src="./java.svg" alt="JAVA Logo" className="w-12 h-12 cursor-pointer" />
            </div>
        </div>
    )
}