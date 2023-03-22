// Express routes
import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import DatabasePool from '../database/pg-pool';

const router = Router();

const pool = DatabasePool.getInstance();

router.get('/', async (_req: Request, res: Response) => {

    const time = await pool.query('SELECT NOW()');

    console.log(time.rows[0].now)

    res.send(`Hello World! ${time.rows[0].now}`);
});

// jwt login
router.post('/login', async (req: Request, res: Response) => {
    // Validate req.body
    const { email, password } = req.body;

    // Validate email
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }
    // Validate email regex
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Email is not valid' });
    }

    // Validate password
    if (!password) {
        return res.status(400).json({ error: 'Password is required' });
    }

    // Create token
    const token: string = jwt.sign({}, process.env["TOKEN_SECRET"] as string);

    return res.header('auth-token', token).json(token);
});


export default router;