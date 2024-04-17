import { request, response } from "express";
import { getInfoUserFromGitHub } from "../utils/getInfoUserFromGitHub.js";

const getUserProfileAndRepositories = async (req = request, res = response) => {
    const { username } = req.params;

    if(username == undefined || username == null) username = 'jhoemsoftware';

    console.log(username);

    const { dataUserProfile, dataReposUser } = await getInfoUserFromGitHub(username);

    if (!dataUserProfile) return res.status(404).json({
        title: "ERROR",
        message: `Error trying to get information for ${username}`
    });

    return res.status(200).json({ dataUserProfile, dataReposUser });
}

export default getUserProfileAndRepositories;