import jwt from 'jsonwebtoken';

export default async function handler(req: any, res: any) {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Extract token from Authorization header

        // Verify the token signature using the secret key
        const decodedToken = jwt.verify(token, '12345678');

        // Check if the token has expired
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        if (decodedToken.exp < currentTime) {
            throw new Error('Token has expired');
        }

        // Optionally, perform additional checks as needed

        // Token is valid
        res.status(200).json({ message: 'Token is valid', decodedToken });
    } catch (error) {
        console.error('Error validating token:', error);
        res.status(401).json({ error: 'Token validation failed' });
    }
}