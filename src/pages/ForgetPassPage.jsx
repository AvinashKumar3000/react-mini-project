function ForgetPassPage() {
    return (
        <div className="container welcome-page">
            <section className="welcome-section">
                <h2>forget your password page</h2>
                <input type="text" name="username" id="username" placeholder="username" />
                <br />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                />
                <br />
                <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="confirm-password"
                />
                <br />
                <button>update</button>
            </section>
        </div>

    );
}

export default ForgetPassPage;