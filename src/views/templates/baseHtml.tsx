export const BaseHtml = ({ children }: Html.PropsWithChildren) => {
  return (
    <html>
      <head>
        <title>Tool Hunt</title>
        <link href="/public/globals.css" rel="stylesheet" />
        <script src="https://unpkg.com/htmx.org@1.9.12"></script>
        <script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/dropzone@5/dist/min/dropzone.min.css" type="text/css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" /> {/* Favicon png */}
        <link rel="icon" type="image/png" href="/public/favico.png" />
      </head>
      <body>
        <main class="max-w-4xl m-auto my-12">{children}</main>
      </body>
    </html>
  );
};
