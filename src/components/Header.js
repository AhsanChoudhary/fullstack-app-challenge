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
    background: 'darkslategrey',
    color: 'black',
    textAlign: 'center',
    padding: '10px',
    margin: '15px',
}

export default Header;