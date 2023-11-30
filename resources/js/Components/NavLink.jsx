import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center w-32 h-10 justify-center rounded-lg border-b-2 text-xl font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 text-gray-900 focus:border-indigo-700 '
                    : 'border-transparent bg-red-500 text-white hover:bg-gray-300 hover:text-black focus:text-gray-700 focus:border-gray-300 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
