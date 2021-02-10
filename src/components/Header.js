import React from 'react'

function Header() {
    return (
        <div>
            <header style={headerStyle}>
                <h1>Tasks To Complete</h1>
            </header>
        </div>
    )
}

const headerStyle = { 
    background: '#DEDFED',
    color: 'darkslategrey',
    textAlign: 'center',
    padding: '10px',
    margin: '15px',
}

export default Header;