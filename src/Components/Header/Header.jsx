import React from 'react'

function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                <Button
                    variant="text"
                    className="mobile-menu"
                    aria-label="Open menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Icon name={menuOpen ? "close" : "menu"} />
                </Button>
                <Logo />
                <nav
                    className={menuOpen ? "nav is-open" : "nav"}
                    aria-label="Main navigation"
                >
                    <a href="#shop">Shop</a>
                    <a href="#story">Our approach</a>
                    <a href="#faq">FAQ</a>
                </nav>
                <div className="header-actions">
                    <Button
                        variant="text"
                        className="search-action"
                        aria-label="Search"
                    >
                        <Icon name="search" />
                        <span>Search</span>
                    </Button>
                    <Button
                        variant="text"
                        aria-label={cartLabel}
                        onClick={() => setCartOpen(true)}
                    >
                        <Icon name="bag" />
                        <span className="cart-text">Bag</span>
                        {cartCount > 0 && <b className="cart-count">{cartCount}</b>}
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header