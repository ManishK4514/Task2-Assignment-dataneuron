import express from 'express';
import { getNote, updateNote, saveNote, deleteNote, getCount } from '../controllers/NoteController.js';

const router = express.Router();

router.get('/', getNote);
router.post('/save', saveNote);
router.post('/update', updateNote);
router.post('/delete', deleteNote);
router.get('/count', getCount);

export default router;