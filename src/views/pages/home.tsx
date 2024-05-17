import { BaseHtml } from "../templates/baseHtml";

export const Home = () => {
  return (
    <BaseHtml>
      <main class="space-y-12">
        <header class="flex justify-between items-center ">
          <a href="/" class="font-bold tracking-tight text-lg">
            toolhunt.
          </a>
          <a href="/submissions" hx-boost="true">
            <button class="w-fit text-xs">Submit tools</button>
          </a>
        </header>
        <section class="text-center flex flex-col items-center gap-6">
          <div class="px-4 py-1 text-sm bg-slate-200 text-slate-950 border border-slate-800 font-medium tracking-tight rounded-full w-fit">
            Introducing Toolhunt
          </div>
          <h1 class="lg:px-32">Discover the beneficial tools for your developments</h1>
          <p class="px-24 lg:px-0">High quality devtools and Resources that help you ship faster</p>
          <input
            name="q"
            placeholder="search tools..."
            class="w-72"
            hx-post="/tools"
            hx-target="#tools"
            hx-swap="transition:true"
            hx-trigger="keyup delay:500ms"
          />
        </section>
        <section hx-post="/tools" hx-trigger="load" id="tools" class="grid grid-cols-1 lg:grid-cols-3 gap-8"></section>
      </main>
    </BaseHtml>
  );
};
