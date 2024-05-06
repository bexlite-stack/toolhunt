import { SubmitTool } from "../components/submittool";
import { BaseHtml } from "../templates/baseHtml";

export const Submission = () => {
  return (
    <BaseHtml>
      <main class="flex justify-center items-center h-[80vh]">
        <div class="space-y-12">
          <section class="text-center max-w-lg m-auto flex flex-col items-center gap-6">
            <h1>Share something Beneficial</h1>
            <p class="px-20">We would check and verify tools you've submitted, when it's verified, we will publish it.</p>
          </section>
          <SubmitTool />
          <section class="flex justify-center">
            <a href="/" hx-boost="true" class="w-fit text-sm">
              Back to home
            </a>
          </section>
        </div>
      </main>
    </BaseHtml>
  );
};
