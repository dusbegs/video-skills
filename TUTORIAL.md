# TUTORIAL — Dari Nol Sampai Short Pertama

Tutorial lengkap repo ini, Bahasa Indonesia, langkah demi langkah.
Tidak perlu pengalaman Remotion / GSAP sebelumnya.

> Repo ini: `dusbegs/video-skills` (GitHub, setelah di-push — lihat
> `INSTALL.md`). 22 skill, gratis semua.

---

## Bagian 1 — Install (5 menit)

### 1a. Install semua skill sekaligus

```bash
npx skills add dusbegs/video-skills --all
```

Itu saja. Skills CLI akan menemukan 22 skill dan memasangnya ke
agent kamu.

Cek dulu tanpa install:

```bash
npx skills add dusbegs/video-skills --list
```

### 1b. Install sebagian saja

```bash
# cuma yang dibutuhin buat Short pertama:
npx skills add dusbegs/video-skills --skill remotion-create remotion-markup remotion-captions remotion-render humanizer
```

### 1c. Update kalau ada versi baru

```bash
npx skills update
```

### 1d. Tanpa skills CLI (copy manual)

Copy folder skill yang kamu mau dari `skills/` ke folder skill
agent kamu, misal `~/.agents/skills/` atau `~/workspace/custom-skills/`.

---

## Bagian 2 — Short 60 Detik Pertama (30 menit)

Kita bikin Short horor 60 detik, vertikal 9:16, pakai template
Tengah Malam Indo. Ikuti urutannya — jangan loncat.

### Langkah 1 — Naskah (5 menit)

Tulis naskah ±150 kata, ikuti template ini:

| Detik | Bagian | Contoh |
|---|---|---|
| 0–2 | Hook | "Jangan buka kamar nomor 7." |
| 2–8 | Konteks | "Kos di pinggir kota, 2019, satu kamar kosong." |
| 8–40 | Eskalasi | 4–6 beat, tiap beat makin tegang |
| 40–52 | Twist | Fakta yang membalik dugaan |
| 52–58 | Sisa akhir | Penutup yang nempel di kepala |
| 58–60 | Loop | Kalimat yang nyambung balik ke hook |

Lalu lewatkan naskah ke skill **`humanizer`** — biar kedengeran kayak
orang cerita, bukan kayak chatbot. Perintah ke agent kamu:

> "Rapikan naskah ini pakai skill humanizer, jangan ubah isinya."

### Langkah 2 — Suara (5 menit)

Pakai **arboTTS** (gratis, offline, aman monetisasi, Bahasa Indonesia).
Jangan pakai ElevenLabs gratis buat video yang mau dimonetisasi —
tier gratisnya non-komersial.

Hasilnya: 1 file audio narasi, ±60 detik.

### Langkah 3 — Scaffold proyek Remotion (2 menit)

```bash
npx create-video@latest --yes --blank --no-tailwind shorts-pertama
cd shorts-pertama
```

Skill yang dipakai: **`remotion-create`**.

### Langkah 4 — Komposisi 9:16 (10 menit)

Buat komposisi `1080 × 1920`, `30 fps`, durasi `60 detik`
(= `60 * 30 = 1800 frame`).

Pola dasarnya (skill **`remotion-markup`**):

```tsx
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";

export const ShortPertama = ({ title }: { title: string }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // teks masuk pelan 0.5 detik pertama
  const opacity = interpolate(frame, [0, 0.5 * fps], [0, 1]);

  return (
    <div style={{ width: 1080, height: 1920, background: "#0a0f14" }}>
      <h1 style={{ opacity, fontSize: 96, color: "#f5c518" }}>{title}</h1>
    </div>
  );
};
```

Aturan emas Remotion:

- Animasi pakai `useCurrentFrame()` + `interpolate()` — **jangan**
  CSS `transition` / `animation`, itu tidak ke-render.
- `fps` selalu dari `useVideoConfig()`, jangan hardcode 30.
- `useCurrentFrame()` taruh di komponen sekecil mungkin.

Lihat contoh lengkap yang sudah jadi di `examples/remotion-hello/`.

### Langkah 5 — Caption (5 menit)

Skill **`remotion-captions`**. Caption diproses sebagai JSON:

```ts
type Caption = {
  text: string;
  startMs: number;
  endMs: number;
  timestampMs: number | null;
  confidence: number | null;
};
```

Alurnya: transkrip audio → JSON `Caption` → tampilkan per kata/frasa,
sinkron sama audio. File panduannya ada di
`skills/remotion/remotion-captions/`.

### Langkah 6 — Preview & render (3 menit)

```bash
npx remotion studio          # preview di browser, cek keterbacaan di HP
npx remotion render ShortPertama out/shorts-01.mp4
```

Skill: **`remotion-studio`** buat preview, **`remotion-render`** buat
export. Selalu sertakan ID komposisi pas render.

### Checklist sebelum upload

- [ ] Naskah lewat `humanizer`, fakta dicek
- [ ] Suara arboTTS (bukan ElevenLabs gratis)
- [ ] 9:16, 1080×1920, caption kebaca di HP
- [ ] Cerita original — bukan clip podcast orang lain

---

## Bagian 3 — Animasi Teks Pakai GSAP (10 menit)

Buat animasi teks buat web / cover / landing. Skill: **`gsap-core`** +
**`gsap-timeline`**.

```bash
npm install gsap
```

```js
import gsap from "gsap";

// satu tween: teks masuk dari bawah, pelan
gsap.from(".judul", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" });

// rangkaian: judul dulu, lalu subjudul, lalu tombol
const tl = gsap.timeline();
tl.from(".judul", { y: 50, opacity: 0, duration: 0.8 })
  .from(".subjudul", { y: 30, opacity: 0, duration: 0.6 }, "-=0.3")
  .from(".tombol", { scale: 0.9, opacity: 0, duration: 0.4 }, "-=0.2");
```

Aturan emas GSAP:

- Utamakan `transform` + `opacity` (`x, y, scale, rotation`) — biar 60fps.
  Hindari animasi `width / height / top / left` (skill
  **`gsap-performance`**).
- Animasi ikut scroll? Tambah **`gsap-scrolltrigger`**.
- Di React? Pakai hook `useGSAP()` (skill **`gsap-react`**).
  Di Vue/Svelte? Skill **`gsap-frameworks`**.
- Butuh efek khusus (teks terbelah, drag, flip)? Skill **`gsap-plugins`** —
  semua plugin gratis, tanpa key.

Contoh yang bisa langsung dibuka di browser:
`examples/gsap-hello.html` — buka file itu, tidak perlu build.

---

## Bagian 4 — Potong Video Panjang Jadi Shorts (tanpa ngoding)

Kalau bahannya video panjang (podcast, rekaman), jangan rakit manual.
Pakai repo di `REPOS.md`, urutan coba:

1. **Chopify** — pertama. Tanpa API key, tanpa upload, tanpa watermark.
   Terbukti: podcast 89 detik → 3 klip 9:16 bersuara + caption.
2. **autoclip** — lokal penuh (Whisper + Ollama).
3. **AI-Youtube-Shorts-Generator** — mode `--mode local` + Gemini free tier.
4. **MoneyPrinterTurbo** — video faceless dari satu topik.

---

## Kalau mentok

| Masalah | Baca |
|---|---|
| Bikin video baru dari nol | `remotion-best-practices` → `remotion-create` |
| Markup / animasi di video | `remotion-markup` |
| Caption nggak sinkron | `remotion-captions` |
| Render gagal / mau export still | `remotion-render` |
| Peta di video | `remotion-maps` (MapLibre = gratis, tanpa key) |
| Animasi patah-patah | `gsap-performance` |
| Naskah kedengeran AI | `humanizer` |
| Cari docs Remotion terbaru | `remotion-docs` |
| Lisensi Remotion | `remotion-license` |

Ringkasan semua skill ada di `SKILLS.md`, alur channel lengkap di
`WORKFLOW.md`.
