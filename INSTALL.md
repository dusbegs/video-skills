# INSTALL.md — Cara Orang Lain Install Repo Ini

Sudah dites 19 Nov 2026: `npx skills add <lokasi-repo-ini> --list`
menemukan **22 skill** (Remotion 13 + GSAP 8 + Humanizer 1).
Jadi struktur repo ini sudah benar buat skills CLI, tidak perlu diubah.

## Cara 1 — Via GitHub (paling gampang buat orang lain, 1 perintah)

Pemilik repo dulu (sekali saja):

```bash
# 1. Buat repo publik baru di github.com/new, nama: video-skills
#    (jangan centang "Add a README" — repo ini sudah punya)
# 2. Dari folder repo ini:
cd ~/workspace/video-skills
git remote add origin https://github.com/<username-github-kamu>/video-skills.git
git push -u origin master
```

Orang lain kemudian (cukup 1 perintah):

```bash
npx skills add <username-github-kamu>/video-skills --all
```

Atau lihat dulu isinya tanpa install:

```bash
npx skills add <username-github-kamu>/video-skills --list
```

Atau install sebagian saja:

```bash
npx skills add <username-github-kamu>/video-skills --skill remotion-create gsap-core humanizer
```

Bentuk lain yang sama (juga jalan):

```bash
npx skills add https://github.com/<username-github-kamu>/video-skills --all
```

> Repo harus **publik**. Kalau privat, orang lain harus login GitHub
> dulu dan tetap bisa install, tapi tidak semudah di atas.

## Cara 2 — Tanpa GitHub (clone / zip lokal)

```bash
git clone https://github.com/<username-github-kamu>/video-skills.git
npx skills add ./video-skills --all
```

Atau download ZIP repo dari GitHub → extract → perintah yang sama
dengan path folder hasil extract.

## Cara 3 — Tanpa skills CLI (copy manual)

Skill itu pada dasarnya cuma folder berisi `SKILL.md`. Orang lain bisa
copy folder `skills/remotion/<nama>/`, `skills/gsap/<nama>/`,
`skills/humanizer/` ke folder skill agent mereka (misal
`~/.agents/skills/` atau `~/workspace/custom-skills/`), lalu restart
agent-nya. Cara ini jalan, tapi tidak dapat update otomatis.

## Update buat orang lain

Kalau repo ini di-update (skill baru / versi baru), orang lain update
dengan:

```bash
npx skills update remotion-create gsap-core humanizer
# atau semua:
npx skills update
```
