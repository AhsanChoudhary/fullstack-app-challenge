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
    background: 'black',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}

export default Header;