# 🎬 video-skills — Semua Skill Video Kita dalam 1 Repo

![22 skills](https://img.shields.io/badge/skills-22-blue)
![Remotion 13](https://img.shields.io/badge/Remotion-13-0b84f3)
![GSAP 8](https://img.shields.io/badge/GSAP-8-0ae448)
![Humanizer 1](https://img.shields.io/badge/Humanizer-1-orange)
![Gratis](https://img.shields.io/badge/harga-gratis-brightgreen)
![Lisensi](https://img.shields.io/badge/lisensi-MIT%20%2F%20Apache--2.0-lightgrey)

**Dari naskah sampai Short 60 detik — satu repo, satu perintah install.**

Ringkasan + salinan lengkap 22 skill video yang di-install 19 Nov 2026,
plus indeks 10 repo video gratis-aman-komersil. Dibuat buat channel
**Tengah Malam Indo**, tapi bisa dipakai siapa saja.

## ⚡ Quickstart — 30 detik

```bash
npx skills add dusbegs/video-skills --all
```

Baru pertama kali? Ikuti **[TUTORIAL.md](TUTORIAL.md)** — dari nol sampai
Short pertama dalam 30 menit, ada contoh kode yang bisa langsung jalan.

```bash
# contoh GSAP, buka di browser — tanpa build:
open examples/gsap-hello.html
```

## 📚 Isi repo

| File / folder | Isi |
|---|---|
| **[CREDITS.md](CREDITS.md)** | ⭐ Pembuat asli tiap skill & repo — wajib dibaca sebelum share/fork |
| **[TUTORIAL.md](TUTORIAL.md)** | ⭐ Mulai dari sini: install → Short 60 detik pertama → animasi GSAP |
| **[INSTALL.md](INSTALL.md)** | Cara orang lain install repo ini (sudah dites: 22 skill ketemu) |
| **[SKILLS.md](SKILLS.md)** | Ringkasan 1-baris + kapan pakai tiap dari 22 skill |
| **[WORKFLOW.md](WORKFLOW.md)** | Alur Tengah Malam Indo: naskah → suara → video → caption → render |
| **[REPOS.md](REPOS.md)** | 10 repo video gratis-komersil + hasil sample nyata |
| **[SOURCES.md](SOURCES.md)** | Asal tiap skill: repo sumber, commit, cara update |
| `skills/remotion/` | 13 skill Remotion v4.0.545 |
| `skills/gsap/` | 8 skill GSAP, lisensi MIT |
| `skills/humanizer/` | 1 skill Humanizer v4.0.0, lisensi MIT |
| `examples/` | Contoh jalan: `gsap-hello.html`, `remotion-hello/ShortPertama.tsx` |

> Catatan struktur: `remotion-best-practices` di upstream memang berisi
> salinan bersarang dari 12 skill Remotion lainnya. Itu bawaan upstream,
> bukan duplikat buatan repo ini.

## 🎥 Remotion (13) — bikin video pakai React, render jadi MP4

| Skill | Pakai kalau… |
|---|---|
| `remotion-best-practices` | **Router utama.** Mulai dari sini |
| `remotion-create` | Bikin proyek / komposisi baru (`npx create-video@latest`) |
| `remotion-markup` | Markup React: animasi, efek, audio, `useCurrentFrame()` + `interpolate()` |
| `remotion-interactivity` | Layer/timing/style bisa diedit di Remotion Studio |
| `remotion-captions` | Transkrip → tampilkan → animasikan caption (JSON `Caption`) |
| `remotion-render` | Export MP4 / still / OpenTimelineIO (`npx remotion render <id> out/video.mp4`) |
| `remotion-studio` | Preview di Studio (`npx remotion studio`) |
| `remotion-maps` | Peta: statis / Mapbox / MapLibre (gratis, tanpa key) / MapTiler / CesiumJS 3D |
| `remotion-multimedia` | Mediabunny: durasi audio/video, dimensi video |
| `remotion-docs` | Cari docs Remotion terbaru via Algolia, fetch `.md`-nya |
| `remotion-saas` | Aplikasi video (form → render, `<Player>`, Lambda/Vercel/Node/Cloudflare) |
| `remotion-license` | Lisensi Remotion, FAQ, harga |
| `remotion-upgrade` | Upgrade Remotion (`npx remotion upgrade`) |

## ✨ GSAP (8) — animasi JavaScript yang halus

| Skill | Pakai kalau… |
|---|---|
| `gsap-core` | Tween dasar: `gsap.to/from/fromTo`, easing, stagger, `matchMedia()` |
| `gsap-timeline` | Rangkaian animasi berurutan / paralel |
| `gsap-scrolltrigger` | Animasi ikut scroll, pinning, scrub, parallax |
| `gsap-plugins` | Flip, Draggable, SplitText, SVG, fisika, CustomEase — semua gratis |
| `gsap-react` | Animasi di React/Next.js, hook `useGSAP()` |
| `gsap-frameworks` | Animasi di Vue/Nuxt, Svelte/SvelteKit |
| `gsap-utils` | `clamp, mapRange, normalize, interpolate, random, snap, toArray, wrap, pipe` |
| `gsap-performance` | Biar 60fps: utamakan transform + opacity |

## ✍️ Humanizer (1) — naskah biar nggak kedengeran AI

`humanizer` — tulis ulang teks yang kedengeran AI jadi kayak ditulis
manusia, tanpa mengubah isinya. Dipakai terakhir buat naskah sebelum
direkam/dibacakan TTS.

## 🗺️ Mau apa? → skill apa?

- Bikin video baru → `remotion-best-practices` → `remotion-create`
- Caption di video → `remotion-captions` + `remotion-markup`
- Peta di video → `remotion-maps` (MapLibre kalau mau gratis tanpa key)
- Render MP4 → `remotion-render`
- Animasi teks/grafik → `gsap-core` + `gsap-timeline`
- Animasi pas scroll → `gsap-scrolltrigger`
- Naskah kedengeran AI → `humanizer`
- Potong video panjang jadi Shorts → lihat `REPOS.md` (Chopify dulu)

## 🔄 Update

```bash
npx skills update
```

Lalu salin lagi dari `~/.agents/skills/` ke `skills/` di repo ini.
Detail di `SOURCES.md`.

## 📄 Lisensi

Skill di `skills/` tetap di bawah lisensi upstream masing-masing
(GSAP MIT, Humanizer MIT, Remotion sesuai `remotion-license`).
Semua skill di sini gratis. Remotion butuh lisensi hanya untuk
perusahaan tertentu. GSAP semua plugin gratis sejak diakuisisi Webflow,
tanpa Club key.

Dibuat Jett buat andet, 19 Nov 2026.
