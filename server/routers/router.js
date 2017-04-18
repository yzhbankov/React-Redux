import express from 'express'
import path from 'path'

const router = express.Router();

router.use((req, res, next) => {
    console.log('Something is happens');
    next();
});

router.use(express.static(path.join(__dirname, '../../', 'public')));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../', 'public/index.html'))
});

export default router;