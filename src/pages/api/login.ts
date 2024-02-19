import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { sql } from '@vercel/postgres';

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse,
) {
    try {
        const { email, password } = request.body;

        // Check if user exists with provided email and password
        const result = await sql.query(
            `SELECT * FROM Users1 WHERE email = $1 AND password = $2`,
            [email, password]
        );

        if (result.rows.length === 0) {
            // User not found or credentials are incorrect
            return response.status(401).json({ error: 'Invalid credentials' });
        }

        // User found, generate JWT token
        const token = jwt.sign({ email: result.rows[0].email }, '12345678', {
            expiresIn: '1h' // Token expires in 1 hour
        });

        // Return token along with success message
        return response.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error logging in:', error);
        return response.status(500).json({ error: 'Internal server error' });
    }
}