import notesStorage from "../DB/DbFile.js";

export function createNewNote(req, res) {
    const { title, content } = req.body;

    if (!title || !content) {
        return res
            .status(400)
            .json({ error: "Title and content are required." });
    }

    const id = Date.now().toString();
    const createdAt = new Date(Date.now()).toLocaleString();
    notesStorage.set(id, {
        title,
        createdAt,
        content,
    });

    res.status(201).json({
        message: "Note saved successfully!!",
        id: notesStorage.get(id),
    });

    // console.log(notesStorage);
}

export function deleteNote(req, res) {
    const id = req.params.id;

    if (!id) {
        return res.status(400).json({ error: "Note ID is required." });
    }

    if (notesStorage.delete(id)) {
        console.log("deleted note!");
        res.status(200).json({ message: "Note deleted Successfully!! " });
    } else {
        res.status(404).json({ error: "Note not found!!" });
    }
}

export function updateNote(req, res) {
    const id = req.params.id;

    if (!id) {
        return res.status(400).json({ error: "Note ID is required." });
    }

    let { title, content } = req.body;

    if (!title && !content) {
        return res.status(400).json({
            error: "At least title or content must be provided to update.",
        });
    }

    const note = notesStorage.get(id);
    if (!note) return res.status(404).json({ error: "Note not found" });

    note.title = title ?? note.title;
    note.content = content ?? note.content;
    notesStorage.set(id, note);

    return res
        .status(200)
        .json({ message: "The Note was updated successfully!!" });
}

export function showNote(req, res) {
    const id = req.params.id;

    if (!id) {
        return res.status(400).json({ error: "Note ID is required." });
    }

    const note = notesStorage.get(id);
    if (!note) {
        return res
            .status(404)
            .json({ message: "Note with given ID not found!!" });
    }

    res.status(200).json({ note });
}

export function showAllNote(req, res) {
    return res.status(200).json({ notes: Array.from(notesStorage.entries()) });
}
