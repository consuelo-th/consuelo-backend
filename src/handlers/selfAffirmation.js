import SelfAffirmation from "../models/selfAffirmation.js"


export const getAllAffirmations = async (req, res) => {
    try {
        const affirmations = await SelfAffirmation.find();
        res.status(200).json({
            message: "success",
            data: affirmations
        });

      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error getting affirmations.' });

      }
} 
export const getOneAffirmation = async (req, res) => {
    const { id } = req.params;

    try {
        const affirmation = await SelfAffirmation.findOne({_id: id})
         
        res.status(200).json({
            message: "success",
            data: affirmation
        });
          
    } catch(err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching affirmation.' });
    }
} 


export const createAffirmation = async (req, res) => {
    const { content, authorId } = req.body;

    try {
        const newAffirmation = await SelfAffirmation.create({
            content,
            authorId
        });

        res.status(201).json({
            message: "affirmation created",
            data: newAffirmation
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating affirmation.' });
    }
} 



export const updateAffirmation = async (req, res) => {
    const { id } = req.params;
    const { content, authorId } = req.body;

    try {
        const updatedAffirmation = await SelfAffirmation.findByIdAndUpdate(id, {
            content,
            authorId
         }, { new: true });

        res.status(200).json({
            message: "update successful",
            data: updatedAffirmation
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating affirmation.' });
    }
} 
export const deleteAffirmation = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedAffirmation = await SelfAffirmation.findByIdAndDelete(id);

        if (!deletedAffirmation) {
        return res.status(404).json({ message: 'affirmation not found.' });
        }

        res.status(200).json({
            message: "deleted",
            data: deletedAffirmation
        });

    } catch (err) {

        console.error(err);
        res.status(500).json({ message: 'Error deleting affirmation.' });
    }
} 