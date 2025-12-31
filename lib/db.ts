import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

const sql = connectionString
    ? postgres(connectionString, {
        onnotice: () => { }, // Silence notices
        debug: (connection, query, params) => {
            console.log("SQL Query executed:", query);
        }
    })
    : (() => {
        // Mock function that returns empty array locally to prevent crash
        const fn = () => {
            console.warn("DATABASE_URL is not defined (Local mock mode).");
            return Promise.resolve([]);
        };
        return fn as any as postgres.Sql<{}>;
    })();

console.log("Database initialized. Env var present:", !!connectionString);

export default sql;
