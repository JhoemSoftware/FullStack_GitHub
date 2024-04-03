export const getInfoUserFromGitHub = async (user = 'jhoemsoftware') => {
    try {
        const userRes = await fetch(`https://api.github.com/users/${user}`);
        const dataUserProfile = await userRes.json();

        const reposRes = await fetch(dataUserProfile.repos_url);
        const dataReposUser = await reposRes.json();
        
        dataReposUser.sort((a, b) => (new Date(b.created_at)) - (new Date(a.created_at)));

        return {
            dataUserProfile,
            dataReposUser
        }
    } catch (error) {
        console.clear();
        console.error(error);
        console.log('Backend Util file 🤓');
        return false;
    }
}