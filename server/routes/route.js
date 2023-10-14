import express from 'express';
import { saveJobData } from '../controller/job-controller.js';
const router =  express.Router();


router.post('/save', saveJobData);

export default router