import mongoose from "mongoose";
import Note from "../model/NoteSchema.js";

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes)
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
        console.error(error)
    }
}

export const getOneNote = async (req, res) => {
    try {
        // check whether the noteId is valid
        if (!mongoose.Types.ObjectId.isValid(req.params.noteId)) { return res.status(404).json({message: "No Such note on the db"}) }

        const note = await Note.findById(req.params.noteId)

        if (!note) { return res.status(404).json({message: "No such note on the db"}) }

        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
        console.error(error)
    }
}

export const addNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        const note = new Note({title, content});

        await note.save();
        res.status(201).json({message: "note added successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
        console.error("error on adding note", error);
    }
}

export const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.noteId, {title, content}, {new: true});

        if (!updatedNote) { return res.status(404).json({message: "No such note on the db"}) }
        res.status(201).json(updatedNote);
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
        console.error("error on update note", error);
    }
}

export const deleteNote = async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.noteId);

        res.status(200).json({message: "Note deleted successfully"})
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
        console.error("error on deleting note", error);
    }
}