# Portfolio Farhan Rahmansyah - JavaScript Website

Website portfolio statis berbasis HTML, CSS, dan JavaScript vanilla. Desain dibuat modern, responsif, dan cocok untuk HR, stakeholder, maupun reviewer project.

## Struktur File

```text
farhan-portfolio-js/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── Farhan_Rahmansyah_CV.pdf
```

## Cara Menjalankan

1. Ekstrak file ZIP.
2. Buka `index.html` langsung di browser.
3. Untuk pengembangan yang lebih nyaman, gunakan ekstensi Live Server di VS Code.

## Cara Mengedit Data Portfolio

Buka `script.js`, lalu edit bagian berikut:

- `experiences` untuk mengubah pengalaman.
- `projects` untuk menambah atau mengubah project.
- `skillGroups` untuk mengubah technical skill.
- `certifications` untuk mengubah sertifikasi.

Contoh menambah project:

```js
projects.push({
  title: "Nama Project Baru",
  category: "AI/RAG",
  icon: "🚀",
  description: "Deskripsi singkat project.",
  stack: ["Python", "FastAPI", "Docker"],
  github: "https://github.com/username/repo",
  demo: "https://link-demo.com"
});
```

## Cara Deploy

### GitHub Pages
1. Buat repository baru di GitHub.
2. Upload semua file ke repository.
3. Masuk ke Settings → Pages.
4. Pilih branch `main` dan folder `/root`.
5. Simpan, lalu buka link GitHub Pages yang diberikan.

### Netlify
1. Masuk ke Netlify.
2. Pilih Add new site → Deploy manually.
3. Drag and drop folder `farhan-portfolio-js`.
4. Website akan langsung online.

## Catatan

Tombol Download CV sudah diarahkan ke file `assets/Farhan_Rahmansyah_CV.pdf`.
Ganti link GitHub dan Demo pada setiap project di `script.js` ketika sudah tersedia.
