function Footer({ activeTab, setTab }) {
    function validate(params) {
        return activeTab === params ? "active" : "";
    }
    function handleClick(params) {
        if (params !== activeTab) {
            setTab(params);
        }
    }
    return (
        <footer>
            <div
                className={validate("home")}
                onClick={() => handleClick("home")}
            >
                Home
            </div>
            <div
                className={validate("search")}
                onClick={() => handleClick("search")}
            >
                search
            </div>
            <div
                className={validate("library")}
                onClick={() => handleClick("library")}
            >
                library
            </div>
            <div
                className={validate("profile")}
                onClick={() => handleClick("profile")}
            >
                profile
            </div>
        </footer>
    );
}

export default Footer;