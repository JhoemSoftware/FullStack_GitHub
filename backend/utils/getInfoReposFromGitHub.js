export const getInfoReposFromGitHub = async (lang = '') => {
    try {
        const res = await fetch(`https://api.github.com/search/repositories?q=language:${lang}&sort=stars&order=desc&per_page=10`);
        const dataRepos = await res.json();

        return {
            dataRepos
        }
    } catch (error) {
        console.clear();
        console.error(error);
        console.log('Backend Util file 🤓');
        return false;
    }
}