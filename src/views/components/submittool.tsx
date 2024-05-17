export const SubmitTool = () => {
  return (
    <form hx-post="/submission" hx-encoding="multipart/form-data" class=" max-w-md m-auto space-y-2">
      <input name="name" placeholder="tool name" />
      <input name="image" type="file" />
      <input name="url" placeholder="https://urlofthetools.dev" />
      <select name="category" class="bg-slate-950">
        <option>free</option>
        <option>freemium</option>
        <option>premium</option>
        <option>open-source</option>
      </select>
      <input name="tags" placeholder="js, javascript, typescript, dev tool" />
      <textarea name="description" rows="6" placeholder="short description"></textarea>
      <button>Submit</button>
    </form>
  );
};
