# PUSH_GUIDE — Push Repo Ini ke GitHub, Langkah demi Langkah

Target: `https://github.com/dusbegs/video-skills` (publik).
Repo lokal sudah siap: `~/workspace/video-skills/`, branch `master`,
290 file, 3 commit. Yang kurang hanya: repo di GitHub + login push.

> Kenapa tidak pakai password GitHub? GitHub sudah tidak menerima
> password akun untuk `git push` (sejak 2021). Yang dipakai adalah
> **token (PAT)** atau **login `gh auth login`**. Password akun tetap
> dipakai buat login di website GitHub, bukan buat push.

---

## Langkah 1 — Buat repo kosong di GitHub (di HP, 2 menit)

1. Buka https://github.com/new di browser HP, login sebagai `dusbegs`.
2. **Repository name:** `video-skills`
3. Pilih **Public**.
4. **Jangan** centang "Add a README file", "Add .gitignore", atau
   "Choose a license" — repo ini sudah punya semuanya.
5. Tap **Create repository**.
6. GitHub akan menampilkan halaman repo kosong dengan alamat:
   `https://github.com/dusbegs/video-skills.git` — itu tandanya
   Langkah 1 beres. Berhenti di sini, kabari Jett.

## Langkah 2 — Buat token push (di HP, 3 menit)

1. Buka https://github.com/settings/tokens
2. Pilih **Tokens (classic)** → **Generate new token** →
   **Generate new token (classic)**.
3. **Note:** `video-skills-push`
4. **Expiration:** pilih `7 days` (cukup buat push ini; token bisa
   dihapus setelah push beres).
5. Centang **hanya** `repo` (centang kotak `repo` — semua sub-kotaknya
   ikut tercentang).
6. Tap **Generate token** di bawah.
7. **Salin tokennya sekarang** — token cuma ditampilkan sekali.
   Token bentuknya `ghp_` + huruf/angka, contoh `ghp_xxxx...`.
   Jangan kirim token ini di chat biasa.

## Langkah 3 — Push (pilih salah satu cara)

### Cara A — Jett yang push (paling gampang)

1. Minta kartu aman ke Jett buat masukin token (bukan di chat).
2. Jett jalankan ini dari repo lokal:
   ```bash
   cd ~/workspace/video-skills
   git remote add origin https://github.com/dusbegs/video-skills.git
   git push -u origin master
   ```
   (Token dipakai sebagai password push, lalu dibuang — tidak
   disimpan di file, memory, atau log.)
3. Cek: https://github.com/dusbegs/video-skills sudah menampilkan
   README, TUTORIAL.md, dan folder `skills/`.

### Cara B — Kamu push sendiri (dari laptop / Termux)

```bash
cd video-skills
git remote add origin https://github.com/dusbegs/video-skills.git
git push -u origin master
# Username: dusbegs
# Password: <tempel token dari Langkah 2, BUKAN password akun>
```

## Langkah 4 — Verifikasi (1 menit)

1. Buka https://github.com/dusbegs/video-skills — README harus tampil.
2. Tes install dari repo GitHub itu:
   ```bash
   npx skills add dusbegs/video-skills --list
   ```
   Harus menemukan **22 skill**.
3. Kalau sudah jalan, orang lain bisa install dengan:
   ```bash
   npx skills add dusbegs/video-skills --all
   ```

## Setelah push beres

- Hapus token di https://github.com/settings/tokens (buka token
  `video-skills-push` → **Delete**) — token sudah tidak dibutuhkan
  lagi sampai ada update berikutnya.
- Update repo berikutnya: ubah file di repo lokal → `git commit` →
  `git push` (pakai token baru, atau `gh auth login` sekali saja).
