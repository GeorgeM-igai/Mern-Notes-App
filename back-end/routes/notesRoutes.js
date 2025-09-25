import express from "express";
import { addNote, deleteNote, getNotes, getOneNote, updateNote } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getNotes)
router.get("/:noteId", getOneNote)
router.post("/", addNote)
router.put("/:noteId", updateNote)
router.delete("/:noteId", deleteNote)

export default router;
