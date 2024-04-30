function Header() {
    return (
        <header>
            <div>
                <i className="fa-solid fa-chevron-left" id="back-btn" />
            </div>
            <div id="page-title">
                <i className="fa-solid fa-house" />
                <span>home</span>
            </div>
            <div>
                <i className="fa-solid fa-circle-info" />
            </div>
        </header>
    );
}

export default Header;