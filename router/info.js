import express from "express";
import {
    getInfo,
    createInfo,
    updateInfo,
    deleteInfo,
} from "../controller/info.js";

const router = express.Router();

router.route("/info/:id").get(getInfo);

router.post("/info", createInfo);

router.put("/info/update", updateInfo);

router.delete("/info/delete:id", deleteInfo);

export default router;
