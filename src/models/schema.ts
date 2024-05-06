import { db } from "./db";

(() => {
  db.exec(`
       CREATE TABLE tool (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            url TEXT NOT NULL,
            image TEXT
       );
       CREATE TABLE analytic (
            id TEXT PRIMARY KEY,
            toolId TEXT REFERENCES tool(id),
            visit INTEGER
       )
    `);
})();
