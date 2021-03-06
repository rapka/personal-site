// Modded template function from the plugin to include favicon links
const { makeHtmlAttributes } = require('@rollup/plugin-html');

const rollupTemplate = async ({
  attributes,
  files,
  meta,
  publicPath,
  title
}) => {
  const scripts = (files.js || [])
    .map(({ fileName }) => {
      const attrs = makeHtmlAttributes(attributes.script);
      return `<script src="${publicPath}${fileName}"${attrs}></script>`;
    })
    .join('\n');

  const links = (files.css || [])
    .map(({ fileName }) => {
      const attrs = makeHtmlAttributes(attributes.link);
      return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`;
    })
    .join('\n');

  const metas = meta
    .map((input) => {
      const attrs = makeHtmlAttributes(input);
      return `<meta${attrs}>`;
    })
    .join('\n');

  return `<!doctype html>
<html${makeHtmlAttributes(attributes.html)}>
  <head>
    ${metas}
    <title>${title}</title>
    ${links}
    <link rel="manifest" href="/manifest.json">
    <link rel="icon" href="/favicon.png" type="image/x-icon">
    <link rel="apple-touch-icon-precomposed" sizes="128x128"
      href="favicon.png" type="image/png">
  </head>
  <body>
    <noscript><div class="noscript">You need JavaScript enabled for this site, friend.</div></noscript>
    ${scripts}
  </body>
</html>`;
};

export default rollupTemplate;