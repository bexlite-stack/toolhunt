import { Toolcard } from "../components/toolcard";
import { BaseHtml } from "../templates/baseHtml";

export const Home = () => {
  return (
    <BaseHtml>
      <main class="space-y-12">
        <header class="flex justify-between items-center max-w-lg m-auto">
          <div class="font-bold tracking-tight">toolhunt.</div>
          <a href="/submissions" hx-boost="true">
            <button class="w-fit text-xs">Submit tools</button>
          </a>
        </header>
        <section class="text-center max-w-lg m-auto flex flex-col items-center gap-6">
          <div class="px-4 py-1 text-sm bg-slate-100 border border-slate-300 font-medium tracking-tight rounded-full w-fit">Introducing Toolhunt</div>
          <h1>Discover the beneficial tools for your developments</h1>
          <p class="px-20">A crowdsourced list of the best open-source projects on the internet.</p>
          <input name="q" placeholder="search tools..." class="w-72" hx-post="/tools" hx-target="#tools" hx-trigger="keyup delay:500ms" />
        </section>
        <section hx-post="/tools" hx-trigger="load" id="tools" class="max-w-lg m-auto space-y-4"></section>
      </main>
    </BaseHtml>
  );
};
