import express from "express";
import {
    createNewNote,
    deleteNote,
    showAllNote,
    showNote,
    updateNote,
} from "../controllers/noteController.js";
const router = express.Router();
router.route("/").get(showAllNote).post(createNewNote);

router.route("/:id").get(showNote).put(updateNote).delete(deleteNote);
export default router;
