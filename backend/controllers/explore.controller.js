import { request, response } from "express";
import { getInfoReposFromGitHub } from "../utils/getInfoReposFromGitHub.js";

const getReposExplore = async (req = request, res = response) => {
    const { lang } = req.params;
    
    const { dataRepos } = await getInfoReposFromGitHub(lang);

    if (!dataRepos) return res.status(500).json({
        title: "ERROR",
        message: `I don't get information for ${lang}`
    });

    return res.status(200).json({ dataRepos });
}

export default getReposExplore;