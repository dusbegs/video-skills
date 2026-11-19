# SOURCES.md — Asal & Cara Update

## Skill (di-install 19 Nov 2026 via skills CLI 1.9.0, `--all --json`)

| Kelompok | Sumber | Commit | Versi |
|---|---|---|---|
| Remotion (13) | `remotion-dev/skills` | `6f55706d1069e512430582ad86e4e57dc07afe1b` | 4.0.545 |
| GSAP (8) | `greensock/gsap-skills` | `aed9cfd3277740755f6bfc1155c7aa645403b760` | — (MIT) |
| Humanizer (1) | `blader/humanizer` | `b48c832f0f809c1b5658edbb838c2521b72f2413` | 4.0.0 (MIT) |

Perintah install asli (andet):

```bash
npx skills add remotion-dev/skills && npx skills add greensock/gsap-skills && npx skills add blader/humanizer
```

Lockfile lengkap (hash per skill): `~/workspace/skills-lock.json`.
Lokasi install asli: `~/workspace/.agents/skills/` (disalin juga ke
`~/workspace/custom-skills/` supaya Muse menemukannya).
Repo ini menyalin dari `~/workspace/.agents/skills/` tanggal 19 Nov 2026.

## Repo video (di-clone 18 Nov 2026)

Lihat `REPOS.md` + `~/workspace/video-repos/INSTALL_REPORT.md`
(commit HEAD + ukuran tiap repo).

## Cara update repo ini

```bash
npx skills update remotion-best-practices remotion-captions remotion-create \
  remotion-docs remotion-interactivity remotion-license remotion-maps \
  remotion-markup remotion-multimedia remotion-render remotion-saas \
  remotion-studio remotion-upgrade
npx skills update gsap-core gsap-frameworks gsap-performance gsap-plugins \
  gsap-react gsap-scrolltrigger gsap-timeline gsap-utils
npx skills update humanizer
# lalu salin ulang:
rm -rf skills && mkdir -p skills/remotion skills/gsap skills/humanizer
cp -r ~/.agents/skills/remotion-* skills/remotion/
cp -r ~/.agents/skills/gsap-* skills/gsap/
cp -r ~/.agents/skills/humanizer skills/humanizer/
# perbarui tabel commit di atas + tanggal di README.md, lalu commit
```
