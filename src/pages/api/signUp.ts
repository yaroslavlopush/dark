import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const { first_name, last_name, email, password } = request.body;

    const result = await sql.query(
      `INSERT INTO Users1 (FirstName, LastName, email, password) VALUES ($1, $2, $3, $4) RETURNING *`,
      [first_name, last_name, email, password]
    );

    return response.status(200).json({ message: 'Data inserted successfully', data: result.rows[0] });
  } catch (error) {
    return response.status(500).json({ error });
  }
}