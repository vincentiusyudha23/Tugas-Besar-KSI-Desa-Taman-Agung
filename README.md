Tugas Besar Kapita Selekta Informatika

Kelas RC - Kelompok 3 Pengabdian Desa Taman Agung

Anggota Kelompok:
- Idza Ramaulkim (121140152)
- Ignatius Julio Bintang Regen (121140192)
- Silvester andrian sitanggang (121140153)
- Miftah Hasan Hadi Mohtar (121140045)
- Slamet Nugroho (118140189)
- Vincentius Yudha Ryfandi (118140170)

Berikut URL Drive untuk PPT dan Foto/Video Kegiatan:

- Google Drive(Berkas-berkas yang harus dikumpul) : 
   <https://drive.google.com/drive/folders/15-tGLrE5DM7Q19j1AU3Eb_pTVqBQPBDa?usp=drive_link>

- Link Laporan Akhir :
    <https://docs.google.com/document/d/1a0cayCXz-n9qQAB3lbaZ8GEo5J244ONEeH7ypj6GTgU/edit?usp=sharing>

- Link Laporan PPT :
    <https://www.canva.com/design/DAF2REugED8/o4bv92fIHCGeLYImREXLtg/edit?utm_content=DAF2REugED8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton>

- Link Petunjuk Penggunaan / Manual Book :
    <https://drive.google.com/file/d/13AncMojG-IplBneW4Uc2ST-7i9mV1yfU/view?usp=sharing>

- Link Poster :
    <https://drive.google.com/file/d/1FZUMOdN4YoPa9MoKozAgvz2QAX6eTv9k/view?usp=sharing>

- Design Figma : 
    <https://www.figma.com/file/8ZU7kB72NqnLXb1E6JvQ96/Untitled?type=design&node-id=0%3A1&mode=design&t=87AG91faIRUYcYE6-1>
  
- Link Database :
  https://drive.google.com/file/d/11QmSk9z4DPQo-sUZEHcRI49b_UEzjM0S/view?usp=sharing



Cara Clone dan Menjalankan Web Desa Taman Agung di local
1. Lakukan di commend promt (CMD) atau git bash

- git clone <https://github.com/vincentiusyudha23/Tugas-Besar-KSI-Desa-Taman-Agung.git>
- composer update
- npm install
- cp .env.example .env
- php artisan key:generate

2. setelah menyelesaikan step poin 1, buat database di mySql sesuai dengan DB_DATABASE di file .env
3. untuk Run devMode web di local, lakukan di cmd/git bash
 - php artisan serve
 - npm run dev
5. untuk run buildMode, lakukan di cmd/git bash
 - npm run build
 - php artisan serve
