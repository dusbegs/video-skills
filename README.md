# video-skills — Semua Skill Video Kita dalam 1 Repo

Ringkasan + salinan lengkap 22 skill video yang di-install andet tanggal
19 Nov 2026, plus indeks 10 repo video gratis-aman-komersil yang sudah
di-clone 18 Nov 2026. Satu tempat, biar nggak nyari-nyari lagi.

- **Dibuat:** 19 Nov 2026
- **Isi:** 22 skill (Remotion 13 + GSAP 8 + Humanizer 1), 280 file, ~1,7 MB
- **Sumber asli:** `~/workspace/.agents/skills/` (hasil
  `npx skills add remotion-dev/skills && npx skills add greensock/gsap-skills && npx skills add blader/humanizer`)
- **Aturan andet:** hanya yang gratisan. Semua skill di sini gratis.
  Remotion butuh lisensi hanya untuk perusahaan tertentu — lihat
  `skills/remotion/remotion-license/SKILL.md`. GSAP semua plugin gratis
  sejak diakuisisi Webflow, tanpa Club key.

## Isi repo

| File / folder | Isi |
|---|---|
| `SKILLS.md` | Ringkasan 1-baris + kapan pakai tiap dari 22 skill |
| `WORKFLOW.md` | Alur kerja Tengah Malam Indo: naskah 60 detik → suara → video → caption → render |
| `REPOS.md` | 10 repo video gratis-komersil + hasil sample nyata + template-reels-t01 |
| `skills/remotion/` | 13 skill Remotion v4.0.545 (lengkap, termasuk REFERENCE.md, contoh, teknik peta) |
| `skills/gsap/` | 8 skill GSAP, lisensi MIT |
| `skills/humanizer/` | 1 skill Humanizer v4.0.0, lisensi MIT |
| `SOURCES.md` | Asal tiap skill: repo sumber, commit, cara update |

> Catatan struktur: `remotion-best-practices` di upstream memang berisi
> salinan bersarang dari 12 skill Remotion lainnya. Itu bawaan upstream,
> bukan duplikat buatan repo ini. Skill kanonis ada di
> `skills/remotion/<nama-skill>/SKILL.md` masing-masing.

## Ringkasnya: 22 skill itu buat apa?

### Remotion (13) — bikin video pakai React, render jadi MP4
Buat video terprogram: komposisi, teks, caption, peta, audio, render.
Mulai dari sini kalau mau bikin video dari kode, bukan dari editor timeline.

| Skill | Pakai kalau… |
|---|---|
| `remotion-best-practices` | **Router utama.** Mulai dari sini, dia nunjuk skill mana yang dibaca |
| `remotion-create` | Bikin proyek / komposisi video baru (`npx create-video@latest`) |
| `remotion-markup` | Nulis markup React video: animasi, efek, audio, `useCurrentFrame()` + `interpolate()` |
| `remotion-interactivity` | Biar layer/timing/style bisa diedit di Remotion Studio |
| `remotion-captions` | Transkrip → tampilkan → animasikan caption (format JSON `Caption`) |
| `remotion-render` | Export MP4 / still / OpenTimelineIO (`npx remotion render <id> out/video.mp4`) |
| `remotion-studio` | Preview di Studio (`npx remotion studio`) |
| `remotion-maps` | Peta statis / Mapbox / MapLibre (gratis, tanpa key) / MapTiler / CesiumJS flyover 3D |
| `remotion-multimedia` | Mediabunny di browser: durasi audio/video, dimensi video |
| `remotion-docs` | Cari docs Remotion terbaru via Algolia, lalu fetch `.md`-nya |
| `remotion-saas` | Bikin aplikasi video (form → render, `<Player>`, Lambda/Vercel/Node/Cloudflare) |
| `remotion-license` | Soal lisensi Remotion, FAQ, harga |
| `remotion-upgrade` | Upgrade Remotion (`npx remotion upgrade`) |

### GSAP (8) — animasi JavaScript di web / di dalam video
Buat animasi DOM/SVG yang halus. Dipakai bareng Remotion untuk animasi
teks/grafik, atau berdiri sendiri di web (landing, cover interaktif).

| Skill | Pakai kalau… |
|---|---|
| `gsap-core` | Tween dasar: `gsap.to/from/fromTo`, easing, stagger, `matchMedia()` |
| `gsap-timeline` | Rangkaian animasi berurutan / paralel, position parameter |
| `gsap-scrolltrigger` | Animasi ikut scroll, pinning, scrub, parallax |
| `gsap-plugins` | Flip, Draggable, ScrollTo, ScrollSmoother, SplitText, ScrambleText, SVG, fisika, CustomEase — semua gratis |
| `gsap-react` | Animasi di React/Next.js, hook `useGSAP()`, cleanup otomatis |
| `gsap-frameworks` | Animasi di Vue/Nuxt, Svelte/SvelteKit, framework lain |
| `gsap-utils` | Helper: `clamp, mapRange, normalize, interpolate, random, snap, toArray, wrap, pipe` |
| `gsap-performance` | Biar 60fps: utamakan transform + opacity, hindari layout thrashing |

### Humanizer (1) — naskah biar nggak kedengeran AI
`humanizer` — tulis ulang teks yang kedengeran AI (kontras "bukan X tapi Y",
trio dipaksakan, dash di mana-mana, klaim dibesar-besarkan, bold di semua
item) jadi kayak ditulis manusia, tanpa mengubah isinya. Dipakai terakhir
untuk naskah Tengah Malam Indo sebelum direkam/dibacakan TTS.

## Cara pakai

1. **Mau bikin video baru?** Baca `remotion-best-practices` dulu, lalu
   `remotion-create`, lalu `remotion-markup`.
2. **Mau animasi teks/grafik?** `gsap-core` + `gsap-timeline`. Kalau di
   React, tambah `gsap-react`. Kalau ikut scroll, `gsap-scrolltrigger`.
3. **Mau caption?** `remotion-captions` (transkrip → JSON `Caption` →
   tampilkan).
4. **Mau render?** `remotion-render`, lalu cek di `remotion-studio`.
5. **Naskah kedengeran robot?** Lewatin `humanizer` dulu.
6. **Mau potong video panjang jadi Shorts?** Jangan pakai skill di sini —
   lihat `REPOS.md`: Chopify (paling bersih, tanpa API key) dan
   autoclip dulu.

Detail per skill ada di `SKILLS.md`. Alur lengkap buat channel ada di
`WORKFLOW.md`.

## Update

Kalau mau update ke versi terbaru dari upstream:

```bash
npx skills update remotion-best-practices remotion-captions remotion-create \
  remotion-docs remotion-interactivity remotion-license remotion-maps \
  remotion-markup remotion-multimedia remotion-render remotion-saas \
  remotion-studio remotion-upgrade
npx skills update gsap-core gsap-frameworks gsap-performance gsap-plugins \
  gsap-react gsap-scrolltrigger gsap-timeline gsap-utils
npx skills update humanizer
```

Lalu salin lagi dari `~/.agents/skills/` ke `skills/` di repo ini.
Commit sumber tiap versi tercatat di `SOURCES.md` dan
`~/workspace/skills-lock.json`.

## Lisensi

Skill-skill di `skills/` tetap di bawah lisensi upstream masing-masing
(GSAP MIT, Humanizer MIT, Remotion sesuai `remotion-license`).
Ringkasan di `README.md`, `SKILLS.md`, `WORKFLOW.md`, `REPOS.md` ini
dibuat Jett buat andet, 19 Nov 2026.
