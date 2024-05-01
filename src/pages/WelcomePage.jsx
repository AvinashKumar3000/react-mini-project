function WelcomePage({ setTab }) {

    return (
        <div className="container welcome-page">
            <section className="welcome-section">
                <h2>Welcome</h2>
                <p>share your photo music, movies and information.</p>
                <button onClick={() => { setTab("sign-in") }}>sign-in</button>
                <br />
                <button onClick={() => { setTab("sign-up") }}>sign-up</button>
                <br />
                <button onClick={() => { setTab("forget-pass") }}>forget password</button>
            </section>
        </div>

    );
}

export default WelcomePage;