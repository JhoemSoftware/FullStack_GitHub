import { request, response } from "express";
import { getInfoUserFromGitHub } from "../utils/getInfoUserFromGitHub.js";

const getUserProfileAndRepositories = async (req = request, res = response) => {
    const { username } = req.params;

    const { dataUserProfile, dataReposUser } = await getInfoUserFromGitHub(username);

    if (!dataUserProfile) return res.status(500).json({
        title: "ERROR",
        message: `I don't get information for ${username}`
    });

    return res.status(200).json({ dataUserProfile, dataReposUser });
}

export default getUserProfileAndRepositories;