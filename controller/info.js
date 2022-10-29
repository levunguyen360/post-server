import { InfoModule } from "../modules/InfoModule.js";

export const getInfo = async (req, res) => {
    try {
        const info = await InfoModule.findById(req.params.id);
        res.status(200).json(info);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createInfo = async (req, res) => {
    try {
        const newInfo = req.body;
        const info = new InfoModule(newInfo);
        await info.save();
        res.status(200).json(info);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updateInfo = async (req, res) => {
    try {
        const updateInfo = req.body;
        const info = await InfoModule.findOneAndUpdate(
            { _id: updateInfo._id },
            updateInfo,
            {
                new: true,
            }
        );
        res.status(200).json(info);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const deleteInfo = async (req, res) => {
    try {
        const Info = await InfoModule.findById(req.params.id);
        if (!Info) {
            return res.status(404).json({ error: error });
        }
        await Info.remove();
        res.status(200).json({
            success: true,
            message: "Post is deleted.",
        });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
