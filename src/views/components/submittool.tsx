export const SubmitTool = () => {
  return (
    <form hx-post="/tools" hx-encoding="multipart/form-data" class="max-w-md m-auto space-y-2">
      <input name="name" placeholder="tool name" />
      <input name="image" type="file" />
      <input name="url" placeholder="https://urlofthetools.dev" />
      <textarea name="description" rows="6" placeholder="short description"></textarea>
      <button>Submit</button>
    </form>
  );
};
