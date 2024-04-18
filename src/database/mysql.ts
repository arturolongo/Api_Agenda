import { Signale } from 'signale';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();
const signale = new Signale();

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
}
//Crear el pool de conexiones 
const pool = mysql.createPool(config);

export async function query(sql: string, params: any[]){
    try{
        const conn = await pool.getConnection();
        signale.success("Conexion existosa a la BD");
        const result =  await conn.execute(sql, params);
        conn.release();
        return result;
    } catch(error){
        signale.error(error);
        console.log('Se ha producdio un error')
        return null;
    }
}