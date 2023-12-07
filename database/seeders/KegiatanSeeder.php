<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class KegiatanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('kegiatans')->insert([
            'tanggal'=>'27 Desember 2020',
            'deskripsi'=>'Mobil Pintar',
            'foto_kegiatan'=>'https://picsum.photos/id/1/1920/1080',
            'created_at'=>date('Y-m-d H-i-s'),
            'updated_at'=>date('Y-m-d H-i-s')
        ]);
        DB::table('kegiatans')->insert([
            'tanggal'=>'12 November 2023',
            'deskripsi'=>'Bantuan Buku-Buku baca',
            'foto_kegiatan'=>'https://picsum.photos/id/2/1920/1080',
            'created_at'=>date('Y-m-d H-i-s'),
            'updated_at'=>date('Y-m-d H-i-s')
        ]);
        DB::table('kegiatans')->insert([
            'tanggal'=>'10 Januari 2021',
            'deskripsi'=>'Pembinaan Tribna',
            'foto_kegiatan'=>'https://picsum.photos/id/3/1920/1080',
            'created_at'=>date('Y-m-d H-i-s'),
            'updated_at'=>date('Y-m-d H-i-s')
        ]);
    }
}
