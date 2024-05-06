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
  // Port
  .listen(3000);
