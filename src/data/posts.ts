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
Hijab monokrom adalah gaya berpakaian yang menggunakan satu palet warna netral — hitam, putih, abu-abu, atau krem — dalam satu penampilan secara konsisten. Palet warna netral justru memberi kebebasan untuk fokus pada tekstur, potongan, dan proporsi yang membuat tampilan benar-benar berbicara.

## Bagaimana Cara Memulai Tampilan Hijab Monokrom?

Kunci dari tampilan monokrom yang berhasil adalah memilih satu warna dasar dan membangun di atasnya. Untuk Hara, kami merekomendasikan hitam sebagai anchor — ia adalah warna paling versatile yang bisa dipadukan dengan hampir segalanya.

## Mengapa Tekstur Penting dalam Gaya Monokrom?

Ketika warna sama, tekstur menjadi pusat perhatian. Kombinasikan pashmina voile ringan dengan atasan berstruktur, atau padukan bergo jersey dengan rok linen. Kontras tekstur menciptakan dimensi visual yang menarik tanpa perlu warna mencolok.

## Bagaimana Mengatur Proporsi dalam Tampilan Monokrom?

Dalam tampilan monokrom, siluet sangat penting. Seimbangkan antara oversized dan fitted — misalnya tunik longgar dengan celana tapered, atau blus structured dengan rok A-line.

## Aksesori Apa yang Cocok untuk Melengkapi Outfit Monokrom?

Satu aksesori berwarna bisa menjadi titik fokus yang sempurna dalam tampilan monokrom. Tas caramel, sepatu nude, atau jam tangan gold — pilih satu dan biarkan ia berbicara sendiri.
    `,
    category: 'Style',
    image: img('1661254601903-0edfe1cd736c', 1400, 900),
    author: 'Hara Editorial',
    publishedAt: '2025-05-20',
    readTime: 5,
    isFeatured: true,
    faqs: [
      {
        question: 'Apa itu hijab monokrom?',
        answer:
          'Hijab monokrom adalah gaya berpakaian yang menggunakan satu palet warna netral — seperti hitam, putih, abu-abu, atau krem — secara konsisten dalam satu penampilan. Tujuannya adalah menciptakan tampilan yang kohesif dan elegan dengan menonjolkan tekstur dan siluet, bukan variasi warna.',
      },
      {
        question: 'Warna apa yang paling mudah untuk tampilan monokrom hijab?',
        answer:
          'Hitam adalah pilihan paling aman dan versatile sebagai titik awal monokrom. Putih memberikan kesan segar dan bersih. Abu-abu medium adalah "bridge" yang paling fleksibel karena bisa dipadukan dengan hampir semua warna netral lain. Untuk pemula, mulailah dari hitam dan putih sebelum bereksplorasi ke krem atau greige.',
      },
      {
        question: 'Bagaimana cara memadukan tekstur hijab dalam tampilan monokrom?',
        answer:
          'Padukan bahan yang kontras secara tekstur: pashmina voile yang ringan dengan atasan berstruktur, bergo jersey dengan rok linen, atau satin dengan cotton. Kontras tekstur menciptakan dimensi visual sehingga tampilan tidak terlihat datar meski menggunakan satu warna. Ini adalah kunci utama agar monokrom terlihat menarik.',
      },
      {
        question: 'Apakah tampilan monokrom cocok untuk semua acara?',
        answer:
          'Ya. Monokrom sangat fleksibel — hitam selalu tepat untuk acara formal, putih atau krem cocok untuk kondangan dan semi-formal, abu-abu ideal untuk kerja sehari-hari, dan kombinasi hitam-putih bisa dipakai di hampir semua situasi. Yang membedakan adalah pilihan bahan dan aksesori, bukan warnanya.',
      },
      {
        question: 'Berapa warna yang boleh digunakan dalam tampilan monokrom?',
        answer:
          'Idealnya satu warna utama dengan variasi shade-nya. Misalnya, hitam pekat dipadukan dengan abu tua dan charcoal masih dianggap monokrom. Kamu bisa menambahkan satu aksesori dengan warna berbeda sebagai focal point — tas berwarna caramel atau sepatu putih — tanpa merusak keseluruhan tampilan monokrom.',
      },
    ],
  },
  {
    id: '2',
    slug: 'tutorial-hijab-pashmina-5-gaya',
    title: '5 Gaya Pashmina yang Bisa Kamu Coba Hari Ini — dari Casual hingga Formal',
    excerpt:
      'Satu pashmina, lima tampilan berbeda. Panduan step-by-step untuk style instan yang cocok untuk segala kesempatan.',
    content: `
Pashmina adalah jenis hijab berbentuk persegi panjang berukuran sekitar 175×75 cm yang bisa dipakai dengan berbagai teknik untuk menghasilkan tampilan berbeda. Satu lembar kain yang tepat bisa menghasilkan puluhan tampilan berbeda. Berikut lima gaya yang bisa langsung kamu coba.

## Bagaimana Cara Memakai Pashmina Simple Wrap yang Nyaman Setiap Hari?

Cara paling dasar dan paling nyaman. Lipat pashmina menjadi dua, selipkan di bawah dagu, dan biarkan kedua ujungnya menjuntai di depan. Cocok untuk aktivitas sehari-hari.

## Bagaimana Cara Memakai Pashmina Turkish Style untuk Tampilan Elegan?

Cara ini memberikan volume di bagian atas kepala. Ikat kedua ujung pashmina di belakang kepala, kemudian rapikan bagian depan. Hasilnya tampak lebih structured dan formal.

## Apa Itu Gaya Pashmina Parisian dan Bagaimana Cara Memakainya?

Lilit pashmina sekali di kepala, biarkan satu sisi lebih panjang dan lemparkan ke bahu sebelahnya. Tampilan ini mengambil inspirasi dari gaya foulard Prancis yang timeless.

## Bagaimana Cara Memakai Pashmina agar Coverage Dada Sempurna?

Teknik ini memastikan coverage maksimal di area dada. Tarik salah satu sisi lebih panjang, lilitkan ke leher, dan sematkan dengan jarum kecil di bahu.

## Bagaimana Cara Memakai Pashmina Drape untuk Acara Formal?

Teknik draping yang memberikan kesan flowing dan dramatis. Cocok untuk kondangan atau acara resmi.
    `,
    category: 'Tutorial',
    image: img('1626497361649-81cc097e9bfd', 1400, 900),
    author: 'Hara Editorial',
    publishedAt: '2025-05-14',
    readTime: 4,
    isFeatured: false,
    faqs: [
      {
        question: 'Berapa ukuran pashmina yang ideal untuk berbagai gaya?',
        answer:
          'Ukuran standar pashmina adalah 175×75 cm, cukup untuk semua teknik pemakaian dasar. Untuk gaya yang membutuhkan lebih banyak panjang seperti chest cover atau formal drape, pilih ukuran 200×80 cm. Pashmina berukuran lebih kecil (150×60 cm) cocok untuk simple wrap sehari-hari tapi kurang fleksibel untuk gaya formal.',
      },
      {
        question: 'Bagaimana cara agar pashmina tidak mudah melorot saat dipakai?',
        answer:
          'Gunakan dalaman ciput (inner hijab) berbahan anti-slip di kepala sebelum memakai pashmina. Sematkan jarum pentul di area bawah dagu dan bahu untuk mengunci posisi. Pilih pashmina berbahan voile atau ceruty yang memiliki daya cengkeram lebih baik dibanding satin atau silk yang licin.',
      },
      {
        question: 'Apakah pashmina bisa dipakai untuk acara formal seperti pernikahan?',
        answer:
          'Ya. Pashmina adalah pilihan populer untuk acara formal karena menghasilkan tampilan yang flowing dan elegan. Teknik Formal Drape atau Turkish Style paling cocok untuk kondangan atau acara resmi. Pilih bahan satin, silk, atau voile premium dalam warna-warna netral atau pastel untuk tampilan yang paling anggun.',
      },
      {
        question: 'Bahan pashmina apa yang paling nyaman untuk dipakai sehari-hari?',
        answer:
          'Voile dan ceruty adalah pilihan terbaik untuk penggunaan sehari-hari — ringan, breathable, dan mudah dibentuk. Untuk cuaca panas, pilih viscose atau rayon yang lebih menyerap keringat. Hindari polyester thick untuk penggunaan harian di iklim tropis karena kurang breathable. Silk dan satin lebih tepat untuk acara spesial.',
      },
      {
        question: 'Berapa lama waktu yang dibutuhkan untuk memakai pashmina?',
        answer:
          'Setelah terbiasa, Simple Wrap hanya butuh 1-2 menit. Turkish Style dan Parisian membutuhkan sekitar 3-5 menit. Chest Cover dan Formal Drape bisa memakan 5-10 menit untuk hasil yang rapi, terutama jika menggunakan jarum pentul. Semakin sering berlatih, semua teknik bisa dilakukan dalam 2-3 menit.',
      },
    ],
  },
  {
    id: '3',
    slug: 'tren-hijab-modest-fashion-2025',
    title: 'Tren Modest Fashion 2025: Minimalis adalah Pernyataan',
    excerpt:
      'Dari panggung mode Paris hingga street style Jakarta — tampilan minimalis dan modest semakin mendominasi. Apa yang perlu kamu tahu tentang tren tahun ini.',
    content: `
Modest fashion adalah gaya berpakaian yang mengutamakan kesopanan dan keanggunan melalui pakaian yang menutupi tubuh secara elegan, dengan penekanan pada kualitas bahan dan siluet yang disengaja. Dunia modest fashion sedang mengalami momen kebangkitan yang luar biasa — bukan hanya sebagai ceruk pasar, tapi sebagai salah satu kekuatan utama dalam industri fashion global.

## Mengapa Tampilan Minimalis Mendominasi Modest Fashion 2025?

Jauh dari ornamen berlebihan — 2025 adalah tentang garis bersih, warna netral, dan siluet yang disengaja. Brand-brand besar mulai mengadopsi estetika ini, membuktikan bahwa modest fashion bukan hanya relevan, tapi justru memimpin percakapan.

## Bahan Apa yang Menjadi Tren dalam Modest Fashion Saat Ini?

Konsumen semakin peduli terhadap asal-usul pakaian mereka. Linen organik, bambu viscose, dan cotton certified mulai menggantikan bahan sintetis. Ini bukan hanya tren — ini pergeseran nilai yang didorong oleh kesadaran lingkungan.

## Kenapa Palet Monokrom Menjadi Pilihan Utama di 2025?

Palet warna netral — hitam, putih, krem, abu — mendominasi koleksi. Ketika semua orang berlomba dengan warna berani, tampil dalam monokrom justru menjadi cara paling kuat untuk menarik perhatian dan menyampaikan pernyataan gaya.

## Bagaimana Teknik Layering yang Tepat untuk Tampilan Modest Fashion?

Teknik layering — memakai beberapa lapisan dengan tekstur berbeda — menjadi cara utama untuk menambah dimensi pada tampilan minimalis tanpa harus mengorbankan prinsip modest.
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
Merawat hijab adalah proses menjaga kualitas bahan dan warna melalui teknik pencucian, pengeringan, dan penyimpanan yang tepat sesuai jenis material. Hijab yang dirawat dengan benar bisa bertahan bertahun-tahun tanpa kehilangan kualitas atau warna. Berikut panduan komprehensif berdasarkan jenis bahan.

## Bagaimana Cara Merawat Hijab Jersey dan Kaos dengan Benar?

Cuci dengan air dingin atau suhu rendah (30°C). Balik sebelum mencuci untuk menjaga warna. Jangan diperas — cukup tekan lembut dan gantung untuk dikeringkan. Setrika dengan suhu rendah saat masih sedikit lembap.

## Bagaimana Cara Mencuci Pashmina Voile dan Chiffon agar Tidak Rusak?

Bahan ini paling delicate. Cuci tangan dengan deterjen lembut, atau gunakan mode delicate di mesin cuci dalam laundry bag. Jangan digosok — tepuk-tepuk lembut. Keringkan datar di atas handuk.

## Apa Cara Terbaik Merawat Hijab Satin dan Silk?

Hanya cuci tangan atau dry clean. Air panas akan merusak kilap alami satin. Setrika dari dalam dengan suhu terendah, atau gunakan steamer untuk hasil terbaik.

## Bagaimana Cara Merawat Hijab Linen agar Tetap Awet?

Bisa dicuci mesin dengan suhu normal. Linen justru menjadi lebih lembut setelah beberapa kali cuci. Keringkan di tempat teduh untuk mencegah pudar.

## Bagaimana Cara Menyimpan Hijab agar Tidak Kusut dan Tetap Rapi?

Gulung, jangan dilipat — lipatan tajam meninggalkan bekas permanen pada bahan halus. Simpan di tempat kering dan hindari paparan sinar matahari langsung.
    `,
    category: 'Tips',
    image: img('1585728748176-455ac5eed962', 1400, 900),
    author: 'Hara Editorial',
    publishedAt: '2025-04-28',
    readTime: 5,
    isFeatured: false,
    faqs: [
      {
        question: 'Berapa suhu yang aman untuk mencuci hijab pashmina?',
        answer:
          'Suhu maksimal 30°C (air dingin hingga suhu ruang) adalah yang paling aman untuk pashmina voile dan chiffon. Untuk pashmina berbahan cotton atau linen, suhu hingga 40°C masih aman. Hindari air panas di atas 60°C untuk semua jenis pashmina karena dapat menyusutkan kain dan merusak serat bahan.',
      },
      {
        question: 'Apakah hijab jersey bisa dicuci di mesin cuci?',
        answer:
          'Ya, hijab jersey dan kaos bisa dicuci di mesin cuci dengan mode normal atau gentle. Gunakan suhu air dingin (30°C), balik hijab sebelum dicuci untuk melindungi permukaan dan warna, masukkan ke laundry bag agar tidak kusut, dan hindari mode spin yang terlalu kencang. Jangan gunakan pemutih yang bisa merusak elastisitas bahan jersey.',
      },
      {
        question: 'Bagaimana cara menyimpan hijab agar tidak mudah kusut?',
        answer:
          'Gulung hijab, jangan dilipat. Lipatan yang tajam dapat meninggalkan bekas permanen terutama pada bahan voile, satin, dan silk. Simpan dalam laci atau kotak yang bersih dan kering, hindari area yang terkena sinar matahari langsung. Untuk hijab bahan halus, bisa dibungkus dengan tisu bebas asam sebelum digulung.',
      },
      {
        question: 'Seberapa sering hijab perlu dicuci?',
        answer:
          'Hijab yang dipakai harian sebaiknya dicuci setiap 2-3 kali pemakaian, atau langsung jika terkena keringat berlebih, parfum, atau kotoran. Hijab untuk acara spesial cukup dicuci setelah setiap pemakaian. Terlalu sering mencuci dapat mempercepat keausan bahan, tapi menunda cuci terlalu lama membuat kotoran makin sulit hilang.',
      },
      {
        question: 'Apakah boleh menjemur hijab di bawah sinar matahari langsung?',
        answer:
          'Tidak disarankan untuk hijab berwarna atau berbahan halus. Sinar UV langsung dapat memudarkan warna, terutama pada hijab hitam dan warna-warna cerah. Jemurlah di tempat yang teduh dan berangin untuk pengeringan terbaik. Khusus hijab putih, sedikit paparan matahari pagi dapat membantu menjaga kecerahannya.',
      },
    ],
  },
  {
    id: '5',
    slug: 'membangun-capsule-wardrobe-hijab',
    title: 'Membangun Capsule Wardrobe Hijab: 10 Piece yang Cukup untuk Segalanya',
    excerpt:
      'Lebih sedikit, lebih bermakna. Filosofi capsule wardrobe untuk lemari hijab yang efisien tapi tidak pernah kehabisan inspirasi.',
    content: `
Capsule wardrobe hijab adalah koleksi hijab yang dipilih secara cermat — biasanya 8 hingga 12 piece — yang dapat dipadukan satu sama lain untuk menciptakan ratusan tampilan berbeda tanpa membeli terus-menerus. Ini tentang memiliki pilihan yang tepat, bukan pilihan yang banyak. Sepuluh piece yang dipilih dengan cermat bisa menghasilkan ratusan kombinasi.

## Apa Prinsip Dasar dalam Membangun Capsule Wardrobe Hijab?

Setiap piece harus bisa dipadukan dengan minimal tiga item lain dalam koleksimu. Jika tidak, pertimbangkan ulang apakah ia layak masuk wardrobe.

## Hijab Apa Saja yang Wajib Ada dalam Capsule Wardrobe?

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

## Bagaimana Cara Memulai Capsule Wardrobe Hijab dari Nol?

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
Hijab outdoor adalah jenis hijab yang dipilih atau dirancang khusus untuk mendukung aktivitas di luar ruangan — mulai dari bahan yang breathable dan moisture-wicking, konstruksi yang tidak mudah tersangkut, hingga perlindungan terhadap sinar UV. Berikut panduan memilih material dan style yang tepat untuk setiap kondisi.

## Bahan Hijab Apa yang Paling Nyaman untuk Cuaca Panas?

Pilih bahan dengan moisture-wicking yang menarik keringat dari kulit — jersey sport, bamboo cotton, atau microfiber. Hindari polyester tebal yang tidak breathable.

## Hijab Instan atau Pashmina, Mana yang Lebih Baik untuk Aktivitas Outdoor?

Untuk aktivitas tinggi (hiking, bersepeda, olahraga), instan adalah pilihan terbaik — tidak ada ujung yang bisa tertiup angin atau tersangkut. Untuk aktivitas moderate (city walk, belanja), pashmina dengan teknik wrap yang aman memberikan tampilan yang lebih stylish.

## Bagaimana Cara Memilih Hijab dengan Perlindungan UV yang Baik?

Bahan dengan UPF (Ultraviolet Protection Factor) semakin populer. Pastikan bahan menutup leher dan telinga dengan baik — area yang sering diabaikan tapi terpapar matahari secara langsung.

## Warna Hijab Apa yang Paling Cocok untuk Aktivitas Outdoor?

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
