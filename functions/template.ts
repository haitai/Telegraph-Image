export function getTemplate({
  redirectPath,
  withError
}: {
  redirectPath: string;
  withError: boolean;
}): string {
  return `
  <!doctype html>
  <html lang="en" data-theme="dark">

    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>已启用密码保护</title>
      <meta name="description" content="This site is password protected.">
      <link rel="shortcut icon" href="https://picocss.com/favicon.ico">

      <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">

      <style>
        body > main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: calc(100vh - 7rem);
          padding: 1rem 0;
          max-width: 600px;
          margin:0 auto;
        }

        .error {
          background: white;
          border-radius: 10px;
          color: var(--del-color);
          padding: 0.5em 1em;
        }

        h2 { color: var(--color-h2); }
      </style>
    </head>

    <body>
      <main>
        <article>
          <hgroup>
            <h1>密码</h1>
            <h2>已启用密码登陆，请输入密码</h2>
          </hgroup>
          ${withError ? `<p class="error">密码错误，请重试。</p>` : ''}
          <form method="post" action="/cfp_login">
            <input type="hidden" name="redirect" value="${redirectPath}" />
            <input type="password" name="password" placeholder="" aria-label="Password" autocomplete="current-password" required autofocus>
            <button type="submit" class="contrast">登陆</button>
          </form>
        </article>
      </main>
    </body>

  </html>
  `;
}
