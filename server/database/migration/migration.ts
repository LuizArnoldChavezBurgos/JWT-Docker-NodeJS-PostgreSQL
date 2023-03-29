import dotenv from 'dotenv';
dotenv.config();

import DatabasePool from "@/infraestructure/database/pg-pool";

import path from 'path';
import fs from 'fs';

const pool = DatabasePool.getInstance();

const filePath = path.join(__dirname, `../1-tables.sql`);
const sql = fs.readFileSync(filePath, 'utf8');

(async () => {
    await pool.query(sql);
})();

console.log("data migrate")

process.exit(0);