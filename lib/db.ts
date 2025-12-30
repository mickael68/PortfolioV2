import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

const sql = connectionString
    ? postgres(connectionString)
    : (() => {
        // Mock function that returns empty array locally to prevent crash
        const fn = () => {
            console.warn("DATABASE_URL is not defined. Using empty mock data.");
            return Promise.resolve([]);
        };
        return fn as any as postgres.Sql<{}>;
    })();

export default sql;
