import { Pool } from 'pg';

const TestConfig = {
  host: process.env.PGHOST_TEST,
  port: 5432,
  user: process.env.PGUSER_TEST,
  password: process.env.PGPASSWORD_TEST,
  databse: process.env.PGDATABASE_TEST,
};

const pool = process.env.NODE_ENV === 'test' ? new Pool(TestConfig) : new Pool();

export default pool;
