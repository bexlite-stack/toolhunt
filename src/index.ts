import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";
import { platformRouter } from "./routers/platformRouter";

const app = new Elysia()
  // Plugin
  .use(staticPlugin())
  .use(html())
  // Routers
  .use(platformRouter)
  .get("/images/:id/:filename", ({ params }) => {
    const file = Bun.file(`./public/tools/${params.id}/${params.filename}`);
    return file;
  })
  // Port
  .listen(8803);

console.log("Running", new Date());
