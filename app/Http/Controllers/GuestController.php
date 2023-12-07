<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Kegiatan;
use Illuminate\Http\Request;

class GuestController extends Controller
{
    public function home(){
        return Inertia::render('Welcome');
    }
    public function kegiatanPage(){

        $data = Kegiatan::orderBy('created_at','desc')->get();

        return Inertia::render('KegiatanPage',[
            'kegiatan'=>$data
        ]);
    }
    public function kesehatanPage(){
        
        return Inertia::render('KesehatanPage');
    }
    public function cuacaPage(){

        return Inertia::render('CuacaPage');
    }
    public function komunitasPage(){

        return Inertia::render('KomunitasPage');
    }
    public function sosialPage(){

        return Inertia::render('SosialPage');
    }
}
