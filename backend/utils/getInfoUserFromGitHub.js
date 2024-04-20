export const getInfoUserFromGitHub = async (user = 'jhoemsoftware') => {
    try {
        const userRes = await fetch(`https://api.github.com/users/${user}`, {
            headers: {
                authorization: `token ${process.env.TOKEN_GITHUB}`
            }
        });
        const dataUserProfile = await userRes.json();

        //console.log(dataUserProfile)
        
        if(!dataUserProfile) return false;
        
        const reposRes = await fetch(dataUserProfile.repos_url, {
            headers: {
                authorization: `token ${process.env.TOKEN_GITHUB}`
            }
        });

        const dataReposUser = await reposRes.json();        
        
        //console.log(dataReposUser);
        
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