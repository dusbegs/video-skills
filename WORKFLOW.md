# WORKFLOW.md — Alur Kerja Video (Tengah Malam Indo)

Alur produksi Shorts 60 detik channel **Tengah Malam Indo**
(horor / true crime Indonesia) pakai skill-skill di repo ini.
Template 60 detik yang sudah disepakati andet (19 Nov 2026, 00:16 WIB):

| Detik | Bagian | Isi |
|---|---|---|
| 0–2 | Hook | Kalimat yang bikin orang berhenti scroll |
| 2–8 | Konteks | Siapa, di mana, kapan |
| 8–40 | Eskalasi | 4–6 beat, makin tegang |
| 40–52 | Twist | Fakta yang membalik dugaan |
| 52–58 | Sisa akhir | Penutup yang nempel |
| 58–60 | Loop | Kalimat yang nyambung balik ke hook |

Jadwal upload: 3/hari, 19:00 / 20:30 / 22:00 WIB, rasio 2 horor : 1 true crime.
Long-form Sabtu. Rotasi cerita 70% Indonesia / 30% luar (narasi tetap
Bahasa Indonesia). Gaya visual: vertikal 9:16, cinematic horror, setting
Indonesia, grain 35mm, low-key teal + amber, kabut, tanpa teks, tanpa gore,
tanpa wajah asli.

## Langkah 1 — Naskah

1. Tulis draf naskah (±150 kata buat 60 detik).
2. Lewatkan ke **`humanizer`** — buang pola AI, biar kedengeran kayak
   orang cerita, bukan kayak chatbot.
3. Cek fakta sebelum render (pelajaran dari paket produksi):
   Dyatlov 1959 (bukan 1969); kode Isdal sudah terurai sebagai travel log;
   Ryan Jombang **belum** dieksekusi — vonis mati 6 Apr 2009, masih menunggu
   eksekusi s.d. 2021, hanya 1 kasus yang disidangkan, detail warnet
   belum terverifikasi (naskah T-03 DITAHAN, jangan render).
4. Hanya cerita original. **Jangan** clip Lentera Malam / Nessie Judge /
   podcast lain — reused content, bahaya monetisasi, walau ada izin.

## Langkah 2 — Suara

- **Suara permanen (aman monetisasi): arboTTS** (MIT, Bahasa Indonesia,
  lokal offline, persona `arbo` saja — satu-satunya persona VITS murni
  lokal). Sudah ter-install + dites 19 Nov 00:19 WIB di
  `~/workspace/your_files/tengah-malam-indo/tools/arboTTS/`
  (v2.5.0, model standard 60 MB; workaround `test_arbo.py` karena
  `import arbotts` error).
- **ElevenLabs free: hanya buat testing / 10 Shorts pertama.**
  Tier gratisnya NON-COMMERCIAL + wajib atribusi — bukan suara permanen.
- Andet enggan rekam suara sendiri — jadi TTS di atas jalurnya.

## Langkah 3 — Visual

- Gambar hook/thumbnail 9:16 dulu (contoh yang sudah jadi: lorong kos +
  pintu 7 + lentera, teks hook "JANGAN BUKA KAMAR NOMOR 7").
- **Video generation di OpenShorts gagal 403 permanen** (tidak tersedia
  buat akun ini di negara/wilayah ini) — jangan retry.
- Audio-only tidak bisa masuk OpenShorts (ingest-nya cuma link YouTube
  atau file MP4).

## Langkah 4 — Rakit video di Remotion

1. `remotion-create` — scaffold proyek (kalau belum ada).
2. `remotion-markup` — komposisi 1080×1920, 30fps, 60 detik:
   gambar hook, teks judul, efek kabut/grain, animasi masuk teks.
   Animasi teks bisa pakai pola GSAP (`gsap-core` + `gsap-timeline`)
   sebagai referensi timing, tapi di dalam Remotion pakai
   `useCurrentFrame()` + `interpolate()`.
3. `remotion-captions` — caption dari naskah (format JSON `Caption`),
   tampilkan per kata/frasa, sinkron dengan audio arboTTS.
4. `remotion-studio` — preview, cek keterbacaan teks di HP.
5. `remotion-render` — `npx remotion render <id> out/shorts-01.mp4`.

## Langkah 5 — Alternatif: potong video panjang jadi Shorts

Kalau bahannya video panjang (podcast, rekaman), jangan rakit manual —
pakai repo di `REPOS.md`:

1. **Chopify** — pertama dicoba. Tanpa API key, tanpa upload, tanpa
   watermark, jalan di CPU. Sudah terbukti: podcast kopi 89 detik →
   3 klip 9:16 bersuara + caption terbakar.
2. **autoclip** — lokal penuh (Whisper + Ollama), butuh Python 3.11/3.12.
3. **AI-Youtube-Shorts-Generator** — mode `--mode local` + Gemini free tier.
4. **MoneyPrinterTurbo** — buat video faceless dari satu topik, pakai
   LLM lokal (Ollama) + Edge TTS biar gratis. Sample bisu 12,87 detik
   sudah terbukti jalan.

## Checklist sebelum upload

- [ ] Naskah lewat `humanizer`, fakta dicek
- [ ] Suara arboTTS (bukan ElevenLabs, kecuali 10 pertama)
- [ ] 9:16, 1080×1920, caption kebaca di HP
- [ ] Cerita original, bukan clip podcast orang
- [ ] Judul + deskripsi + hashtag sudah ditulis manusia (lewat `humanizer` juga)
