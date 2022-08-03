import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const {
  MYSQL_HOST: host,
  MYSQL_USER: user,
  MYSQL_PASSWORD: password,
} = process.env;

const connection = mysql.createPool({ host, user, password });

export default connection;
