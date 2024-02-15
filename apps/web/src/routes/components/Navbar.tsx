import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar font-bold">
            <div className="navbar-start">
                <a className="text-xl text-white" href='/'>Psyduck</a>
            </div>
            <div className="navbar-end">
                <w3m-button />
            </div>
        </div>
    )
}
