# REPOS.md — 10 Repo Video Gratis & Aman Komersil (+ template)

Repo-reponya sudah di-clone di `~/workspace/video-repos/`
(18 Nov 2026, `git clone --depth 1`, total ~800 MB, 10/10 berhasil).
Laporan lengkap: `~/workspace/video-repos/INSTALL_REPORT.md`.
Hasil sample nyata: `~/workspace/video-repos/samples/SAMPLE_REPORT.md`.

Aturan andet: hanya MIT / Apache-2.0. AGPL dan lisensi tidak jelas
sudah disaring keluar.

## Tabel 10 repo

| # | Repo | Lisensi | Ukuran | Buat apa |
|---|---|---|---|---|
| 1 | MoneyPrinterTurbo | MIT | 341 MB | Ketik topik → video pendek (LLM nulis skrip, footage stock, TTS, subtitle, musik, 9:16/16:9) |
| 2 | Wan2.1 | Apache-2.0 | 21 MB | Text-to-video / image-to-video, 1.3B & 14B, sampai 720p. Butuh GPU + download checkpoint |
| 3 | CogVideo | Apache-2.0 (kode) + CogVideoX License (model) | 26 MB | Text/image-to-video CogVideoX 2B/5B/1.5-5B. **Hanya 2B yang Apache-2.0; 5B butuh registrasi lisensi komersil gratis + batas 1 jt kunjungan/bulan** |
| 4 | agnes-video-generator | MIT | 126 MB | Ketik ide → video multi-scene + TTS + subtitle. Butuh 1 API key gratis Agnes AI |
| 5 | openshorts | MIT | 174 MB | Video panjang → Shorts viral 9:16 (deteksi momen AI, face tracking, subtitle, dubbing). Butuh Docker |
| 6 | AI-Youtube-Shorts-Generator | MIT | 2,8 MB | Alternatif Opus Clip: YouTube/file lokal → Shorts 9:16 (Whisper + LLM ranking + auto-crop) |
| 7 | FunClip | MIT | 96 MB | Clipping lokal (FunASR): transkrip → pilih segmen → potong + subtitle |
| 8 | autoclip | MIT | 3,9 MB | Clipper AI lokal: video panjang → klip 9:16 ber-caption + speaker-tracking |
| 9 | chopify | MIT | 9,9 MB | Clipper AI lokal: dashboard + CLI, caption/SRT bisa diedit, preset brand, tanpa API key |
| 10 | OpenCut | MIT | 1,5 MB | Editor video open-source (alternatif CapCut). **Repo ini sedang rewrite total — pakai versi klasik di opencut.app untuk kerja hari ini** |

## Hasil sample nyata (18 Nov 2026, sandbox tanpa GPU/Docker)

| Repo | Hasil |
|---|---|
| MoneyPrinterTurbo | ✅ MP4 nyata 12,87 detik, 1080×1920, 613 KB, 7 baris subtitle Indonesia — **bisu** (Edge TTS diblokir proxy sandbox, bukan salah repo) |
| Chopify | ✅ 3 klip 9:16 dari podcast 89 detik, klip pertama 33,87 detik, **bersuara + caption terbakar** |
| AI-Youtube-Shorts-Generator | ✅ 3 klip 9:16 (33,5 dtk / 27,8 dtk / 18,9 dtk) — pakai Gemini key gratis andet (sekali pakai, tidak disimpan) |
| Agnes | ❌ Belum jalan — butuh API key Agnes AI |
| Wan2.1 / CogVideo | ❌ Belum jalan — butuh GPU + download checkpoint (torch tidak ada) |
| FunClip / autoclip / OpenCut | ❌ Tidak jalan di sandbox (blocker terverifikasi di SAMPLE_REPORT.md) |
| OpenShorts | Butuh Docker — dicoba di GitHub Codespaces |

## Urutan coba (gratis, tanpa GPU)

1. **chopify** — paling tanpa-biaya, tanpa API key, CPU saja
2. **autoclip** — lokal penuh (Ollama + Whisper)
3. **MoneyPrinterTurbo** — paling lengkap buat faceless, siapkan Ollama + Edge TTS
4. **AI-Youtube-Shorts-Generator** — pakai `--mode local` saja
5. **Wan2.1 / CogVideo** — terakhir, butuh GPU + weights besar

## Template tambahan (bukan dari 10 di atas)

- **template-reels-t01** (`~/workspace/video-repos/template-reels-t01/`) —
  template Reels Remotion. Lisensi **Nonkomersial Maliki Studio 1.0**:
  boleh buat channel andet sendiri, **tidak boleh** dijual sebagai
  template atau dipakai buat video klien berbayar.
