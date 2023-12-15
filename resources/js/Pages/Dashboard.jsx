import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Dashboard(props) {
    const [text, setText] = useState('');
    const [isNotif, setIsNotif] = useState(false)
    const { flash } = usePage().props

    const { data, setData, post, processing, errors, reset } = useForm({
        judul: '',
        category: '',
        deskripsi: '',
        gambar: null
    })

    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'align': [] }],
        ['clean']
    ];

    const module = {
        toolbar: toolbarOptions
    }
    const handleRincianPsu = (value) => {
        setData('deskripsi', value)
        setText(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        post('/news', {
            onSuccess: () => reset('category', 'judul', 'gambar')
        });
        setText('')
        setIsNotif(true)
    }

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className='w-full p-5'>
                {flash.message && isNotif && <div className='w-full relative flex justify-end'>
                    <div className='w-96 p-3 rounded-md absolute bg-green-300 flex justify-between items-center'>
                        <h1>{flash.message}</h1>
                        <button className='w-6 h-6 rounded-full hover:bg-green-400' onClick={() => setIsNotif(false)}>X</button>
                    </div>
                </div>}
                <form className='w-full' onSubmit={handleSubmit}>
                    <div className='w-full flex gap-1'>
                        <div className='w-[75%]'>
                            <h1 className='text-lg font-bold'>Judul</h1>
                            <input className='rounded-md w-full mb-5 border-slate-400' type='text' value={data.judul} onChange={(e) => setData('judul', e.target.value)} />
                        </div>
                        <div className='w-[25%]'>
                            <h1 className='text-lg font-bold'>Category</h1>
                            <select className='rounded-md mb-5 w-full' value={data.category} onChange={(e) => setData('category', e.target.value)}>
                                <option>Category...</option>
                                <option value="kegiatan">Kegiatan</option>
                                <option value="kesehatan">Kesehatan</option>
                                <option value="komunitas">Komunitas</option>
                                <option value="cuaca">Cuaca</option>
                                <option value="sosial">Sosial</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-full flex gap-1'>
                        <div className='w-[75%]'>
                            <h1 className='text-lg font-bold'>Description</h1>
                            <div className='h-[40vh]'>
                                <ReactQuill
                                    value={text}
                                    onChange={handleRincianPsu}
                                    modules={module}
                                    theme='snow'
                                    className='h-full'
                                    placeholder='Rincian PSU...'
                                />
                            </div>
                        </div>
                        <div className='w-[25%]'>
                            <h1 className='text-lg font-bold'>Upload gambar</h1>
                            <div className='w-full border border-slate-400 p-2 rounded-md'>
                                <input type='file' accept='image/*' onChange={(e) => setData('gambar', e.target.files[0])} />
                                {data.gambar && <img src={URL.createObjectURL(data.gambar)} className='mt-2 w-full' />}
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-end mt-20'>
                        <button className='bg-red-500 px-3 py-1 text-white rounded-md text-lg' type='submit'>Save</button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
