import mysql from "mysql2/promise";
// connect to the database
const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  });

  const FetchCourses = async () => {
const query = "select * from mydatabase.courses";
const [rows,fields] = await connection.query(query);
return rows;


  }
  export default FetchCourses;
