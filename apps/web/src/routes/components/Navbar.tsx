import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <a className="text-xl text-white" href='/'>Psyduck</a>
            </div>
            <div className="navbar-end">
                <a className="btn">Connect Wallet</a>
            </div>
        </div>
    )
}