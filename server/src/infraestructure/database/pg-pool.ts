import { Pool } from 'pg';

// Singleton Database
class DatabasePool {
  private static instance: Pool;

  private constructor() {
    // Constructor privado para prevenir la creación de instancias directas
  }

  public static getInstance(): Pool {
    if (!DatabasePool.instance) {
      DatabasePool.instance = new Pool({
        host: process.env["PGHOST"],
        user: process.env["PGUSER"],
        password: process.env["PGPASSWORD"],
        database: process.env["PGDATABASE"],
        port: Number(process.env["PGPORT"]),
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
      });
    }

    return DatabasePool.instance;
  }

  public static async connect(): Promise<void> {
    const pool = DatabasePool.getInstance();
    await pool.connect();
  }

  public static async disconnect(): Promise<void> {
    const pool = DatabasePool.getInstance();
    await pool.end();
  }

}

export default DatabasePool;
