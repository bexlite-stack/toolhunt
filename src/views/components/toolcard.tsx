import { ITool } from "../../types/platform.types";

export const Toolcard = ({ id, name, description, url, image, visit }: ITool) => {
  return (
    <div class="p-4 border border-slate-100 hover:border-slate-400 bg-white rounded-lg flex gap-4 items-center transition duration-200">
      <img src={`/public/tools/${id}/${image}`} width={60} height={60} />
      <div class="space-y-2">
        <div>
          <a href={`/redirect?id=${id}&url=${url}`}>
            <h3 class="font-semibold cursor-pointer hover:text-slate-600">{name}</h3>
          </a>
          <p class="text-sm font-medium tracking-tight text-slate-500">{description}</p>
        </div>
        <div class="text-xs text-slate-300 flex gap-1 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20">
            <path
              fill="currentColor"
              d="M2 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm6-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm6-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"
            />
          </svg>
          {visit || 0} {visit >= 2 ? "visits" : "visit"}
        </div>
      </div>
    </div>
  );
};
