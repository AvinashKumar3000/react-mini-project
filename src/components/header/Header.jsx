function Header({ title, icon, handleBack }) {
    return (
        <header>
            <div>
                <i onClick={handleBack} className="fa-solid fa-chevron-left" id="back-btn" />
            </div>
            <div id="page-title">
                {icon}
                <span> {title}</span>
            </div>
            <div>
                <i className="fa-solid fa-circle-info" />
            </div>
        </header>
    );
}

export default Header;