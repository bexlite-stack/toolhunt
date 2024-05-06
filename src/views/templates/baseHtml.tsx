export const BaseHtml = ({ children }: Html.PropsWithChildren) => {
  return (
    <html>
      <head>
        <title>Tool Hunt</title>
        <link href="/public/globals.css" rel="stylesheet" />
        <script src="https://unpkg.com/htmx.org@1.9.12"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />{" "}
      </head>
      <body>
        <main class="max-w-4xl m-auto my-12">{children}</main>
      </body>
    </html>
  );
};
