import { Context } from "elysia";
import { db } from "../models/db";
import { Toolcard } from "../views/components/toolcard";
import { ITool } from "../types/platform.types";
import { ulid } from "ulidx";
import { BaseHtml } from "../views/templates/baseHtml";

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

export function handleGetToolsAdmin() {
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
      `);
  const allTools = dbQuery.all() as ITool[];

  return (
    <BaseHtml>
      {allTools.map((item: ITool) => {
        return (
          <div class="space-y-2">
            <img src={`/images/${item.id}/${item.image}`} width={60} height={60} class="rounded-lg" />
            <div>{item.name}</div>
            <div>{item.description}</div>

            <div class="space-x-2">
              {item.public == 0 ? (
                <button class="w-fit" hx-patch={`/hardwork/publish?id=${item.id}`}>
                  Publish
                </button>
              ) : (
                <button class="w-fit" hx-patch={`/hardwork/unpublish?id=${item.id}`}>
                  Unpublish
                </button>
              )}
              {item.verified == 0 ? (
                <button class="w-fit" hx-patch={`/hardwork/verify?id=${item.id}`}>
                  Verified
                </button>
              ) : (
                <button class="w-fit" hx-patch={`/hardwork/unverify?id=${item.id}`}>
                  Unverified
                </button>
              )}
              <button class="w-fit" hx-delete={`/hardwork/delete?id=${item.id}`}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </BaseHtml>
  );
}

export function handlePublishTool({ query }: Context) {
  const { id } = query;

  db.query("UPDATE tool SET public = 1 WHERE id = ?").run(id as string);
  return new Response(null, {
    headers: {
      "HX-Redirect": "/",
    },
  });
}

export function handleUnpublishTool({ query }: Context) {
  const { id } = query;

  db.query("UPDATE tool SET public = 0 WHERE id = ?").run(id as string);
  return new Response(null, {
    headers: {
      "HX-Redirect": "/",
    },
  });
}

export function handleVerifyTool({ query }: Context) {
  const { id } = query;
  db.query("UPDATE tool SET verified = 1 WHERE id = ?").run(id as string);
  return new Response(null, {
    headers: {
      "HX-Redirect": "/",
    },
  });
}

export function handleUnverifyTool({ query }: Context) {
  const { id } = query;
  db.query("UPDATE tool SET verified = 0 WHERE id = ?").run(id as string);
  return new Response(null, {
    headers: {
      "HX-Redirect": "/",
    },
  });
}

export function handleDeleteTool({ query }: Context) {
  const { id } = query;
  db.query("DELETE FROM tool WHERE id = ?").run(id as string);
  return new Response(null, {
    headers: {
      "HX-Redirect": "/",
    },
  });
}
