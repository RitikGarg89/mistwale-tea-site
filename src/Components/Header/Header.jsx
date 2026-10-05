import React from 'react'
import Logo from '../Logo/Logo'

function Header() {
    return (
        <div>
            <Logo />
            <Logo variant='dark' />
            <button
                type="button"
                onClick={onClick}
                aria-label="Search"
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 ${buttonColor}`}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    aria-hidden="true"
                >
                    <circle
                        cx="11"
                        cy="11"
                        r="6.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                    />

                    <path
                        d="M16 16L20 20"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                    />
                </svg>
            </button>

        </div>
    )
}

export default Header