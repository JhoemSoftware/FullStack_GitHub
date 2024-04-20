import { request, response } from "express";
import { getInfoUserFromGitHub } from "../utils/getInfoUserFromGitHub.js";

const getUserProfileAndRepositories = async (req = request, res = response) => {
    const { username } = req.params;

    const { dataUserProfile, dataReposUser } = await getInfoUserFromGitHub(username);

    if (!dataUserProfile) return res.status(404).json({
        title: "ERROR",
        message: `Error trying to get information for ${username}`
    });

    //TODO: Here call function insert username on database

    return res.status(200).json({ dataUserProfile, dataReposUser });
}

export default getUserProfileAndRepositories;