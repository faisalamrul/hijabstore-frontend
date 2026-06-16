import type { Post } from '../types/post';

const BASE = 'fit=crop&crop=faces,center&q=80';

function img(id: string, w = 1200, h = 800): string {
  return `https://images.unsplash.com/photo-${id}?${BASE}&w=${w}&h=${h}`;
}

export const posts: Post[] = [
  {
    id: '1',
    slug: 'panduan-padu-padan-hijab-monokrom',
    title: 'Panduan Lengkap Padu Padan Hijab Monokrom untuk Tampilan Minimalis',
    excerpt:
      'Warna hitam, putih, dan abu-abu bukan sekadar pilihan aman — ini adalah pernyataan gaya yang kuat. Pelajari cara membangun wardrobe monokrom yang elegan dan versatile.',
    content: `
Monokrom bukan berarti membosankan. Justru sebaliknya — palet warna netral memberi kebebasan untuk fokus pada tekstur, potongan, dan proporsi yang membuat tampilan benar-benar berbicara.

## Mulai dari Fondasi

Kunci dari tampilan monokrom yang berhasil adalah memilih satu warna dasar dan membangun di atasnya. Untuk Hara, kami merekomendasikan hitam sebagai anchor — ia adalah warna paling versatile yang bisa dipadukan dengan hampir segalanya.

## Permainkan Tekstur

Ketika warna sama, tekstur menjadi pusat perhatian. Kombinasikan pashmina voile ringan dengan atasan berstruktur, atau padukan bergo jersey dengan rok linen. Kontras tekstur menciptakan dimensi visual yang menarik tanpa perlu warna mencolok.

## Proporsi adalah Kunci

Dalam tampilan monokrom, siluet sangat penting. Seimbangkan antara oversized dan fitted — misalnya tunik longgar dengan celana tapered, atau blus structured dengan rok A-line.

## Aksesori sebagai Titik Fokus

Satu aksesori berwarna bisa menjadi titik fokus yang sempurna dalam tampilan monokrom. Tas caramel, sepatu nude, atau jam tangan gold — pilih satu dan biarkan ia berbicara sendiri.
    `,
    category: 'Style',
    image: img('1661254601903-0edfe1cd736c', 1400, 900),
    author: 'Hara Editorial',
    publishedAt: '2025-05-20',
    readTime: 5,
    isFeatured: true,
  },
  {
    id: '2',
    slug: 'tutorial-hijab-pashmina-5-gaya',
    title: '5 Gaya Pashmina yang Bisa Kamu Coba Hari Ini — dari Casual hingga Formal',
    excerpt:
      'Satu pashmina, lima tampilan berbeda. Panduan step-by-step untuk style instan yang cocok untuk segala kesempatan.',
    content: `
Pashmina adalah investasi terbaik dalam lemari pakaianmu. Satu lembar kain yang tepat bisa menghasilkan puluhan tampilan berbeda. Berikut lima gaya yang bisa langsung kamu coba.

## 1. Simple Wrap — Untuk Hari-Hari Santai

Cara paling dasar dan paling nyaman. Lipat pashmina menjadi dua, selipkan di bawah dagu, dan biarkan kedua ujungnya menjuntai di depan. Cocok untuk aktivitas sehari-hari.

## 2. Turkish Style — Untuk Tampilan Elegan

Cara ini memberikan volume di bagian atas kepala. Ikat kedua ujung pashmina di belakang kepala, kemudian rapikan bagian depan. Hasilnya tampak lebih structured dan formal.

## 3. Parisian — Untuk Kesan Modern

Lilit pashmina sekali di kepala, biarkan satu sisi lebih panjang dan lemparkan ke bahu sebelahnya. Tampilan ini mengambil inspirasi dari gaya foulard Prancis yang timeless.

## 4. Chest Cover — Untuk Tampilan Tertutup Sempurna

Teknik ini memastikan coverage maksimal di area dada. Tarik salah satu sisi lebih panjang, lilitkan ke leher, dan sematkan dengan jarum kecil di bahu.

## 5. Formal Drape — Untuk Acara Spesial

Teknik draping yang memberikan kesan flowing dan dramatis. Cocok untuk kondangan atau acara resmi.
    `,
    category: 'Tutorial',
    image: img('1626497361649-81cc097e9bfd', 1400, 900),
    author: 'Hara Editorial',
    publishedAt: '2025-05-14',
    readTime: 4,
    isFeatured: false,
  },
  {
    id: '3',
    slug: 'tren-hijab-modest-fashion-2025',
    title: 'Tren Modest Fashion 2025: Minimalis adalah Pernyataan',
    excerpt:
      'Dari panggung mode Paris hingga street style Jakarta — tampilan minimalis dan modest semakin mendominasi. Apa yang perlu kamu tahu tentang tren tahun ini.',
    content: `
Dunia modest fashion sedang mengalami momen kebangkitan yang luar biasa. Bukan hanya sebagai ceruk pasar, tapi sebagai salah satu kekuatan utama dalam industri fashion global.

## Minimalis Mendominasi

Jauh dari ornamen berlebihan — 2025 adalah tentang garis bersih, warna netral, dan siluet yang disengaja. Brand-brand besar mulai mengadopsi estetika ini, membuktikan bahwa modest fashion bukan hanya relevan, tapi justru memimpin percakapan.

## Material Berkelanjutan

Konsumen semakin peduli terhadap asal-usul pakaian mereka. Linen organik, bambu viscose, dan cotton certified mulai menggantikan bahan sintetis. Ini bukan hanya tren — ini pergeseran nilai.

## Monokrom sebagai Pernyataan

Palet warna netral — hitam, putih, krem, abu — mendominasi koleksi. Ketika semua orang berlomba dengan warna berani, tampil dalam monokrom justru menjadi cara paling kuat untuk menarik perhatian.

## Layering yang Disengaja

Teknik layering — memakai beberapa lapisan dengan tekstur berbeda — menjadi cara utama untuk menambah dimensi pada tampilan minimalis.
    `,
    category: 'Trend',
    image: img('1643458180338-02c4fa4be53c', 1400, 900),
    author: 'Hara Editorial',
    publishedAt: '2025-05-07',
    readTime: 6,
    isFeatured: true,
  },
  {
    id: '4',
    slug: 'cara-merawat-hijab-agar-tahan-lama',
    title: 'Cara Merawat Hijab agar Tetap Berkualitas dan Tahan Lama',
    excerpt:
      'Investasi pada hijab berkualitas harus diimbangi dengan perawatan yang tepat. Panduan lengkap mencuci, menyetrika, dan menyimpan hijab dari berbagai bahan.',
    content: `
Hijab yang dirawat dengan benar bisa bertahan bertahun-tahun tanpa kehilangan kualitas atau warna. Berikut panduan komprehensif berdasarkan jenis bahan.

## Jersey dan Kaos

Cuci dengan air dingin atau suhu rendah (30°C). Balik sebelum mencuci untuk menjaga warna. Jangan diperas — cukup tekan lembut dan gantung untuk dikeringkan. Setrika dengan suhu rendah saat masih sedikit lembap.

## Pashmina Voile dan Chiffon

Bahan ini paling delicate. Cuci tangan dengan deterjen lembut, atau gunakan mode delicate di mesin cuci dalam laundry bag. Jangan digosok — tepuk-tepuk lembut. Keringkan datar di atas handuk.

## Satin dan Silk

Hanya cuci tangan atau dry clean. Air panas akan merusak kilap alami satin. Setrika dari dalam dengan suhu terendah, atau gunakan steamer.

## Linen

Bisa dicuci mesin dengan suhu normal. Linen justru menjadi lebih lembut setelah beberapa kali cuci. Keringkan di tempat teduh untuk mencegah pudar.

## Tips Penyimpanan

Gulung, jangan dilipat — lipatan tajam meninggalkan bekas permanen pada bahan halus. Simpan di tempat kering dan hindari paparan sinar matahari langsung.
    `,
    category: 'Tips',
    image: img('1585728748176-455ac5eed962', 1400, 900),
    author: 'Hara Editorial',
    publishedAt: '2025-04-28',
    readTime: 5,
    isFeatured: false,
  },
  {
    id: '5',
    slug: 'membangun-capsule-wardrobe-hijab',
    title: 'Membangun Capsule Wardrobe Hijab: 10 Piece yang Cukup untuk Segalanya',
    excerpt:
      'Lebih sedikit, lebih bermakna. Filosofi capsule wardrobe untuk lemari hijab yang efisien tapi tidak pernah kehabisan inspirasi.',
    content: `
Capsule wardrobe bukan tentang memiliki sedikit pilihan — ini tentang memiliki pilihan yang tepat. Sepuluh piece yang dipilih dengan cermat bisa menghasilkan ratusan kombinasi.

## Prinsip Dasar

Setiap piece harus bisa dipadukan dengan minimal tiga item lain dalam koleksimu. Jika tidak, pertimbangkan ulang apakah ia layak masuk wardrobe.

## 10 Hijab Esensial

1. **Instan hitam** — fondasi untuk hampir semua tampilan
2. **Instan putih** — segar dan bersih untuk hari-hari cerah
3. **Instan abu medium** — bridge antara hitam dan putih
4. **Pashmina navy** — netral tapi dengan karakter
5. **Pashmina krem** — hangat dan timeless
6. **Pashmina putih** — untuk acara formal dan semi-formal
7. **Bergo hitam** — untuk hari-hari aktif
8. **Bergo white** — variasi clean untuk casual
9. **Pashmina sage** — sentuhan warna tanpa keluar dari palet netral
10. **Bergo navy** — versatile untuk kerja dan casual

## Cara Memulai

Mulai dengan hitam dan putih terlebih dahulu. Kuasai dua warna ini, lalu tambahkan satu netral hangat (krem/caramel) dan satu dingin (abu/navy). Dari empat warna ini, hampir semua outfit bisa terbangun.
    `,
    category: 'Style',
    image: img('1613611864136-0ace2a3b9926', 1400, 900),
    author: 'Hara Editorial',
    publishedAt: '2025-04-15',
    readTime: 7,
    isFeatured: false,
  },
  {
    id: '6',
    slug: 'hijab-untuk-aktivitas-outdoor',
    title: 'Hijab untuk Aktivitas Outdoor: Tetap Nyaman tanpa Kompromi Gaya',
    excerpt:
      'Hiking, olahraga, atau sekadar jalan-jalan di bawah terik matahari — pilihan hijab yang tepat membuat semua aktivitas lebih menyenangkan.',
    content: `
Aktivitas outdoor memerlukan hijab yang tidak hanya nyaman, tapi juga fungsional. Berikut panduan memilih material dan style yang tepat untuk setiap kondisi.

## Material untuk Cuaca Panas

Pilih bahan dengan moisture-wicking yang menarik keringat dari kulit — jersey sport, bamboo cotton, atau microfiber. Hindari polyester tebal yang tidak breathable.

## Instan vs. Pashmina untuk Outdoor

Untuk aktivitas tinggi (hiking, bersepeda, olahraga), instan adalah pilihan terbaik — tidak ada ujung yang bisa tertiup angin atau tersangkut. Untuk aktivitas moderate (city walk, belanja), pashmina dengan teknik wrap yang aman memberikan tampilan yang lebih stylish.

## Proteksi UV

Bahan dengan UPF (Ultraviolet Protection Factor) semakin populer. Pastikan bahan menutup leher dan telinga dengan baik — area yang sering diabaikan tapi terpapar matahari.

## Warna untuk Outdoor

Kontras dengan kepercayaan umum, hitam tidak selalu membuat lebih panas — ia bergantung pada material, bukan warna. Bahan ringan berwarna hitam bisa sama nyamannya dengan putih jika material yang tepat dipilih.
    `,
    category: 'Tips',
    image: img('1693985007521-e08e64770947', 1400, 900),
    author: 'Hara Editorial',
    publishedAt: '2025-04-02',
    readTime: 4,
    isFeatured: false,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): Post[] {
  return posts.filter((p) => p.isFeatured);
}

export function getPostsByCategory(category: Post['category']): Post[] {
  return posts.filter((p) => p.category === category);
}
