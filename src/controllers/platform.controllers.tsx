import { Context } from "elysia";
import { db } from "../models/db";
import { Toolcard } from "../views/components/toolcard";
import { ITool } from "../types/platform.types";
import { ulid } from "ulidx";

export function handleGetTools({ body }: Context) {
  let { q } = body as any;

  const query = q || "";

  const dbQuery = db.query(`
        SELECT 
            tool.id, 
            tool.name, 
            tool.description, 
            tool.image,
            tool.url,
            tool.verified,
            tool.public,
            analytic.toolId AS toolId,
            analytic.visit
        FROM 
            tool
        JOIN 
            analytic ON tool.id = analytic.toolId
        WHERE
            (tool.name LIKE ? OR tool.description LIKE ?)
            AND tool.public = 1;
      `);
  const allTools = dbQuery.all(`%${query}%`, `%${query}%`) as ITool[];

  return (
    <>
      {allTools.map((item) => {
        return <Toolcard {...item} />;
      })}
    </>
  );
}

export async function handleSubmission({ body }: Context) {
  const { name, image, url, description } = body as any;
  const toolId = ulid();
  const analyticId = ulid();

  await Bun.write(`./public/tools/${toolId}/${image.name}`, image);

  try {
    db.query("INSERT INTO tool (id, name, description, image, url) VALUES (?,?,?,?,?)").run(toolId, name, description, image.name, url);
    db.query("INSERT INTO analytic (id, toolId, visit) VALUES (?,?,?)").run(analyticId, toolId, 0);
  } catch (error) {
    console.log(error);
  }

  return new Response(null, {
    headers: {
      "HX-Redirect": "/",
    },
  });
}

export async function handleRedirect({ query, set }: Context) {
  const { id, url } = query;

  db.query("UPDATE analytic SET visit = visit + 1 WHERE toolId = ?").run(id as string);

  return (set.redirect = url);
}
