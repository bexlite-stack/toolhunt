import { Elysia } from "elysia";
import { Home } from "../views/pages/home";
import { Submission } from "../views/pages/submission";
import {
  handleDeleteTool,
  handleGetTools,
  handleGetToolsAdmin,
  handlePublishTool,
  handleRedirect,
  handleSubmission,
  handleUnpublishTool,
  handleUnverifyTool,
  handleVerifyTool,
} from "../controllers/platform.controllers";

export const platformRouter = new Elysia()
  // Interface
  .get("/", () => <Home />)
  .get("/submissions", () => <Submission />)

  // Functionality
  .get("/redirect", handleRedirect)
  .post("/tools", handleGetTools)
  .post("/submission", handleSubmission)
  .get("/hardwork", handleGetToolsAdmin)
  .patch("/hardwork/publish", handlePublishTool)
  .patch("/hardwork/unpublish", handleUnpublishTool)
  .patch("/hardwork/verify", handleVerifyTool)
  .patch("/hardwork/unverify", handleUnverifyTool)
  .delete("/hardwork/delete", handleDeleteTool);
