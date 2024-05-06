import { Elysia } from "elysia";
import { Home } from "../views/pages/home";
import { Submission } from "../views/pages/submission";
import { handleGetTools, handleRedirect, handleSubmission } from "../controllers/platform.controllers";

export const platformRouter = new Elysia()
  // Interface
  .get("/", () => <Home />)
  .get("/submissions", () => <Submission />)

  // Functionality
  .get("/redirect", handleRedirect)
  .post("/tools", handleGetTools)
  .post("/submission", handleSubmission);
