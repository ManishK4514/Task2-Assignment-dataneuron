import { NoteModel } from "../models/NoteModel.js";
import { CountModel } from "../models/CountModel.js";

export const getNote = async (req, res) => {
    const notes = await NoteModel.find();
    res.status(201).send(notes);
};

export const saveNote = async (req, res) => {
    try {
        const { text } = req.body;
        const note = new NoteModel({ text });
        await note.save();

        // create if not exist and increment the count
        const count = await CountModel.findOne();
        if (!count) {
            const newCount = new CountModel({ count: 1 });
            await newCount.save();
        } else {
            count.count += 1;
            await count.save();
        }

        res.status(201).send({ note, message: "Note Saved Successfully..." });
    } catch (err) {
        console.log(err);
        res.status(500).send({error: "Internal Server Error..."});
    }
};

export const updateNote = async (req, res) => {
    try {
        const { _id, text } = req.body;
        await NoteModel.findByIdAndUpdate(_id, { text });

        // create if not exist and increment the count
        const count = await CountModel.findOne();
        if (!count) {
            const newCount = new CountModel({ count: 1 });
            await newCount.save();
        } else {
            count.count += 1;
            await count.save();
        }

        res.status(201).send({message: "Updated Successfully..."});
    }
    catch (err) {
        console.log(err);
        res.status(500).send({error: "Internal Server Error..."});
    }
};

export const deleteNote = async (req, res) => {
    try {
        const { _id } = req.body;
        await NoteModel.findByIdAndDelete(_id);

        const count = await CountModel.findOne();
        if (!count) {
            const newCount = new CountModel({ count: 1 });
            await newCount.save();
        } else {
            count.count += 1;
            await count.save();
        }
        
        res.status(200).send({message: "Deleted Successfully..."});
    }
    catch (err) {
        console.log(err);
        res.status(500).send({error: "Internal Server Error..."});
    }
};

export const getCount = async (req, res) => {
    try {
        const count = await CountModel.findOne();
        res.status(200).send({count});
    }
    catch (err) {
        console.log(err);
        res.status(500).send({error: "Internal Server Error..."});
    }
}