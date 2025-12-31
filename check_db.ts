import sql from "./lib/db";

async function main() {
    console.log("Checking DB connection...");
    try {
        const projects = await sql`SELECT * FROM projects`;
        console.log("Projects found:", projects);
    } catch (error) {
        console.error("DB Error:", error);
    }
}

main();
