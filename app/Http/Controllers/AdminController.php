<?php

namespace App\Http\Controllers;

use App\Models\news;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $news = new news();
        $news->judul = $request->judul;
        $news->category = $request->category;
        $news->deskripsi = $request->deskripsi;
        
        if($request->hasFile('gambar')){
            $request->validate([
                'gambar'=>'required|file|image|mimes:jpeg,jpg,png'
            ]);
            $file = $request->file('gambar');
            $fileName = date('ymdhis').'.'.$file->getClientOriginalExtension();
            $file->storeAs('public/gambar',$fileName);
            $news->gambar = $fileName;
        }
        $news->save();

        return Redirect::route('dashboard')->with('message','Berhasil Menambahkan '.$news->category);
    }

    /**
     * Display the specified resource.
     */
    public function show(news $news)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(news $news)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, news $news)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(news $news)
    {
        //
    }
}
