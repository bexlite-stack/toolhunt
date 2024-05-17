import { ITool } from "../../types/platform.types";
import { Tag } from "./tag";

export const Toolcard = ({ id, name, description, url, image, visit, verified }: ITool) => {
  return (
    <div class="relative border-2 border-slate-900 hover:border-slate-800 bg-slate-950 rounded-xl overflow-hidden transition duration-150">
      <div class="h-20 bg-slate-900/50 border-b border-slate-800">
        <div class="text-sm text-slate-300 flex gap-2 items-center absolute top-4 right-4">
          <div class="flex gap-1 items-center text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20">
              <path
                fill="currentColor"
                d="M2 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm6-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm6-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"
              />
            </svg>
            {visit || 0}
          </div>
          <Tag tag="free" />
        </div>
      </div>
      <div class="ml-6 -mt-10">
        <img src={`/images/${id}/${image}`} width={60} height={60} class="rounded-lg w-16 h-16" />
      </div>
      <div class="px-6 pb-6 pt-4 space-y-2">
        <a href={`/redirect?url=${url}&id=${id}`}>
          <h3 class="text-base font-medium flex gap-1 items-center">
            {name}{" "}
            {verified == 1 && (
              <span class="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z"
                  />
                </svg>
              </span>
            )}
          </h3>
        </a>
        <p class="text-sm">{description}</p>
      </div>
    </div>
  );
};
