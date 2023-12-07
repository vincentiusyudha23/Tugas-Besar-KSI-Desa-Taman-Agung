import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center w-32 h-10 justify-center rounded-t-lg border-b-2 text-xl font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'bg-gray-300 border-transparent'
                    : 'border-transparent bg-red-500 text-white hover:bg-gray-300 hover:text-black ') +
                className
            }
        >
            {children}
        </Link>
    );
}
