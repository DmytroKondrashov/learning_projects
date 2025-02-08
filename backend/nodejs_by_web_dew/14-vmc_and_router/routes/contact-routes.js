import express from 'express';
import getContacts from '../controllers/contact-controller.js';
const router = express.Router();

router.get('/contacts', getContacts);

export default router;