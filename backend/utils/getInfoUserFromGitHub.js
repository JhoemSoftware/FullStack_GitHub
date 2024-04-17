export const getInfoUserFromGitHub = async (user = 'jhoemsoftware') => {
    try {
        const userRes = await fetch(`https://api.github.com/users/${user}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        const dataUserProfile = await userRes.json();
        
        if(!dataUserProfile) return false;
        
        console.log('Get info user success 🥳');
        console.log(dataUserProfile);
        
        const reposRes = await fetch(dataUserProfile.repos_url);
        await new Promise(resolve => setTimeout(resolve, 1000));
        const dataReposUser = await reposRes.json();        

        (!dataReposUser) ? dataReposUser = [] : dataReposUser.sort((a, b) => (new Date(b.created_at)) - (new Date(a.created_at)));
        
        return {
            dataUserProfile,
            dataReposUser
        }
    } catch (error) {
        console.clear();
        console.error(error);
        console.log('File Error => getInfoUserFromGitHub 🤔');
        return false;
    }
}