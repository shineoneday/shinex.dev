# shinex.dev

Personal site of Shinex: Home, Projects, Contacts. Plain HTML, CSS and a little JavaScript, no framework and no build step.

The site is the `docs/` folder. Everything outside it is for development only and is not published.

## Preview

Node is portable on this machine, so call it by path:

```powershell
S:\tools\node\node.exe tools\serve.mjs
```

Then open http://localhost:4173.

## Editing

- Texts and projects: `docs/index.html`, `docs/projects/index.html`, `docs/contacts/index.html`.
- Colours and fonts: the variables at the top of `docs/assets/style.css`.
- Header and footer are repeated in every page, change them in all three.
- The character is inline SVG in `docs/index.html`.

## Publishing (GitHub Pages)

1. Push this repository to GitHub.
2. Settings, Pages: deploy from branch `main`, folder `/docs`.
3. Set the custom domain `shinex.dev` and turn on Enforce HTTPS. `docs/CNAME` already holds the domain.
4. DNS at the registrar: `A` records for the root to GitHub Pages, `CNAME` for `www` to `<user>.github.io`.

`.dev` domains open over HTTPS only, so the site shows up after the certificate is issued.

## Credits and licences

- Character, layout and code: made for this site.
- Fonts: Nunito and JetBrains Mono, both under the SIL Open Font License. Licence texts are in `docs/assets/fonts/`.
- Icons: [Phosphor](https://phosphoricons.com), MIT.
- The typed greeting and the big footer are ideas borrowed from dylanchen.me. No code or images were copied from it.
