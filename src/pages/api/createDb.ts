import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const result =
      await sql`CREATE TABLE Users1 ( 
        FirstName varchar(255), 
        LastName varchar(255), 
        email VARCHAR(255) UNIQUE,
        password VARCHAR(255)
    );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}