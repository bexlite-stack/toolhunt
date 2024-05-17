interface TagProps {
  tag: "free" | "freemium" | "premium" | "open-source";
}
export const Tag = ({ tag }: TagProps) => {
  if (tag === "free") {
    return <div class="bg-emerald-900/20  text-emerald-500 px-2 py-1 rounded w-fit  text-xs font-medium">free</div>;
  }
  if (tag === "freemium") {
    return <div class="bg-orange-900/20  text-orange-500 px-2 py-1 rounded w-fit  text-xs font-medium">freemium</div>;
  }

  if (tag === "premium") {
    return <div class="bg-sky-900/20  text-sky-500 px-2 py-1 rounded w-fit  text-xs font-medium">premium</div>;
  }

  return <div class="bg-orange-900/20  text-orange-500 px-2 py-1 rounded w-fit  text-xs font-medium">freemium</div>;
};
