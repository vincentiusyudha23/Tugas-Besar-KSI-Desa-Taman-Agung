<?php

namespace App\Http\Controllers;

use App\Models\news;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GuestController extends Controller
{
    public function home(){
        return Inertia::render('Welcome');
    }
    public function kegiatanPage(){
        $news = news::where('category','kegiatan')->orderBy('created_at','desc')->get();
        return Inertia::render('KegiatanPage',[
            'kegiatan'=> $news
        ]);
    }
    public function kesehatanPage(){
         $news = news::where('category','kesehatan')->orderBy('created_at','desc')->get();
        return Inertia::render('KesehatanPage',[
            'kesehatan'=>$news
        ]);
    }
    public function cuacaPage(){
         $news = news::where('category','cuaca')->orderBy('created_at','desc')->get();
        return Inertia::render('CuacaPage',[
            'cuaca'=>$news
        ]);
    }
    public function komunitasPage(){
         $news = news::where('category','komunitas')->orderBy('created_at','desc')->get();
        return Inertia::render('KomunitasPage',[
            'komunitas'=>$news
        ]);
    }
    public function sosialPage(){
         $news = news::where('category','sosial')->orderBy('created_at','desc')->get();
        return Inertia::render('SosialPage',[
            'sosial'=>$news
        ]);
    }
}
