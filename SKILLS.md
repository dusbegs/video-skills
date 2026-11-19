# SKILLS.md — Ringkasan 22 Skill Video

Satu baris per skill: apa, kapan pakai, perintah/file kunci.
File lengkap ada di `skills/<kelompok>/<nama>/SKILL.md`.

## Remotion — 13 skill, v4.0.545, sumber `remotion-dev/skills`

| # | Skill | Deskripsi singkat | Kapan pakai / kunci |
|---|---|---|---|
| 1 | `remotion-best-practices` | Router semua skill Remotion. Jangan timpa edit user di luar percakapan tanpa konfirmasi. | **Selalu mulai dari sini.** Dia yang nunjuk skill mana yang dibaca. |
| 2 | `remotion-create` | Bikin proyek & komposisi video baru. | Proyek kosong: `npx create-video@latest --yes --blank --no-tailwind .` — lalu buka Studio sebelum build. |
| 3 | `remotion-markup` | Best practice markup React: konten, animasi, efek. | `useCurrentFrame()` di komponen sekecil mungkin, `interpolate()` untuk animasi, `fps` dari `useVideoConfig()`. Jangan pakai CSS transition/animation (tidak ke-render). |
| 4 | `remotion-interactivity` | Bikin markup bisa diedit di Studio. | Struktur kode per unit yang bisa dipilih/digeser/trim sendiri; nilai editable inline di props; schema = props yang bisa diedit Studio. |
| 5 | `remotion-captions` | Transkrip, tampilkan, animasikan caption. | Semua caption diproses JSON tipe `Caption` (`text, startMs, endMs, timestampMs, confidence`). File pendukung: `transcribe-captions.md`, `display-captions.md`, `import-srt-captions.md`. |
| 6 | `remotion-render` | Export video / still / timeline OpenTimelineIO. | `npx remotion render <composition-id> out/video.mp4` (selalu sertakan ID). Props: `--props='{"title":"..."}'` atau `--props=./props.json`. Pakai browser bawaan Remotion. |
| 7 | `remotion-studio` | Preview video di Studio. | `npx remotion studio` (tambah `--no-open` kalau buka URL manual). Verifikasi preview komposisi ke-load. |
| 8 | `remotion-maps` | Animasi peta. | Pilih **tepat 1 teknik**: Static map (gambar satelit + `<Img>`), Mapbox (butuh key, globe + gedung 3D), MapLibre (**gratis, tanpa key**, tanpa gedung 3D), MapTiler (anotasi di atas fitur geografis), CesiumJS (flyover terrain 3D). |
| 9 | `remotion-multimedia` | Mediabunny: kerja multimedia di browser. | Durasi audio, durasi video, dimensi video — masing-masing ada file `.md`-nya sendiri. |
| 10 | `remotion-docs` | Cari docs Remotion terbaru. | Search Algolia → ambil URL → fetch URL + `.md` (hemat token). Jangan andalkan hafalan API. |
| 11 | `remotion-saas` | Bikin aplikasi dengan Remotion. | Form → render, komponen `<Player>` buat embed preview, render client/server (Lambda, Vercel, Node.js, Cloudflare). Ada juga Vue/Angular/Svelte. |
| 12 | `remotion-license` | Info lisensi, FAQ, syarat, tempat beli. | Baca `remotion.dev/docs/license(.md)`, `/license/faq`, `/terms`, `/license/pricing`. Perusahaan yang butuh lisensi pass key tiap render (atau `free-license` kalau memenuhi syarat). |
| 13 | `remotion-upgrade` | Upgrade Remotion + paket terkait. | `npx remotion upgrade` (juga update skill lokal). Kalau CLI tidak ada: `npm view remotion version`, samakan semua `@remotion/*`, selaraskan `zod/mediabunny/@huggingface/transformers`. |

## GSAP — 8 skill, lisensi MIT, sumber `greensock/gsap-skills`

Semua plugin GSAP gratis untuk komersil sejak akuisisi Webflow.
Install: `npm install gsap` (+ `npm install @gsap/react` untuk React).
Jangan bikin `.npmrc` Club — sudah tidak ada.

| # | Skill | Deskripsi singkat | Kapan pakai / kunci |
|---|---|---|---|
| 1 | `gsap-core` | API inti: tween, easing, stagger, defaults, `matchMedia()`. | Animasi JS apa pun. `gsap.to/from/fromTo`, `gsap.matchMedia()` buat responsif + `prefers-reduced-motion`. |
| 2 | `gsap-timeline` | Sequencing: `gsap.timeline()`, position parameter, nesting, playback. | Animasi multi-langkah. Posisi: absolut (`1`), relatif (`+=0.5` / `-=0.2`), label, `<` / `>`. |
| 3 | `gsap-scrolltrigger` | Animasi ikut scroll: trigger, pinning, scrub. | Parallax, section yang di-pin, animasi scrub. Daftar dulu: `gsap.registerPlugin(ScrollTrigger)`. `toggleActions: "play reverse play reverse"`. |
| 4 | `gsap-plugins` | Semua plugin: ScrollTo, ScrollSmoother, Flip, Draggable, Inertia, Observer, SplitText, ScrambleText, SVG (Draw/Morph/MotionPath), fisika, CustomEase/EasePack/CustomWiggle/CustomBounce, GSDevTools. | Butuh plugin apa pun. Import dari `gsap/<NamaPlugin>`, daftar via `registerPlugin`. |
| 5 | `gsap-react` | GSAP di React/Next.js. | Pakai hook `useGSAP()` (bukan `useEffect`), `gsap.registerPlugin(useGSAP)` dulu. Cleanup otomatis, ada `contextSafe` buat callback. |
| 6 | `gsap-frameworks` | GSAP di Vue/Nuxt, Svelte/SvelteKit, framework lain. | Buat tween setelah DOM ada (`onMounted`/`onMount`), bunuh/revert pas unmount, scope selector ke root komponen. |
| 7 | `gsap-utils` | Helper murni: `clamp, mapRange, normalize, interpolate, random, snap, toArray, wrap, pipe`. | Mapping nilai, random, snap ke grid, normalisasi input. Bentuk fungsi: hilangkan argumen nilai terakhir (kecuali `random()`, pakai `true`). |
| 8 | `gsap-performance` | Performa 60fps. | Utamakan **transform + opacity** (`x, y, scale, rotation, opacity`). Hindari `width/height/top/left/margin/padding` (trigger layout). `will-change: transform` secukupnya, batch read/write. |

## Humanizer — 1 skill, v4.0.0, lisensi MIT, sumber `blader/humanizer`

| Skill | Deskripsi singkat | Kapan pakai / kunci |
|---|---|---|
| `humanizer` | Tulis ulang teks yang kedengeran AI jadi kayak ditulis manusia, tanpa mengubah isinya. | Habis nulis naskah/skrip/deskripsi. Buang pola AI: staging (kontras "bukan X tapi Y", closer satu baris), triad dipaksakan, dash di mana-mana, klaim dibesar-besarkan, bold + title case di semua item, wrapper chat yang keikut. |

## Peta cepat: "aku mau X" → skill apa?

- Bikin video baru dari nol → `remotion-best-practices` → `remotion-create`
- Teks/caption jalan di video → `remotion-captions` + `remotion-markup`
- Peta di video (lokasi kejadian, rute) → `remotion-maps` (MapLibre kalau mau gratis tanpa key)
- Video bisa diedit orang lain di Studio → `remotion-interactivity`
- Render MP4 final → `remotion-render`
- Animasi halus di web/cover → `gsap-core` + `gsap-timeline`
- Animasi pas scroll → `gsap-scrolltrigger`
- Animasi di React → `gsap-react`, di Vue/Svelte → `gsap-frameworks`
- Animasi patah-patah / lambat → `gsap-performance`
- Naskah kedengeran AI → `humanizer`
- Potong video panjang jadi Shorts → bukan skill ini, lihat `REPOS.md` (Chopify/autoclip)
