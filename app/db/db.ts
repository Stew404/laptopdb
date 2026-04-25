import postgres from 'postgres'


const sql = postgres({
    transform: {
        ...postgres.camel,
        undefined: null,
    },

    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? "5432"),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
}); // will use psql environment variables

export default sql