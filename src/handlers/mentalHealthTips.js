import mentalHealthTip from "../models/mentalHealthTips.js"

export const getAllTips = async (req, res) => {
    try {
        const tips = await mentalHealthTip.find();
        res.status(200).json({
            message: "success",
            data: tips
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
             message: 'Error getting blogs.' 
        });
    }
}

export const createTip = async (req, res) => {
    const { content, category, authorId } = req.body
    try {
        const newTip = await mentalHealthTip.create({
            content,
            category,
            authorId
        })

        res.status(201).json({
            message: "tip created",
            data: newTip
        });

    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Error creating tip.' 
        });
    }
}

export const getOneTip = async (req, res) => {
    const { id } = req.params;
    try {
        const tip = await mentalHealthTip.findById(id);
        res.status(200).json({
            message: "success",
            data: tip
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error fetching tip.' 
        });

    }
}
export const updateTip = async (req, res) => {
    const { id } = req.params;
    const { content, category, authorId } = req.body;

    try {
        const updatedTip = await mentalHealthTip.findByIdAndUpdate(id, {
            content,
            category,
            authorId
        })

        res.status(200).json({
            message: "success",
            data: updatedTip
        })
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error updating tip.' 
        });
    }
}

export const deleteTip = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTip = await mentalHealthTip.findByIdAndDelete(id)
        res.status(200).json({
            message: "tip deleted"
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Cannot delete tip.' 
        });
    }
}