function SignUpPage() {
    return (
        <div className="container welcome-page">
            <section className="welcome-section">
                <h2>sign-up page</h2>
                <input type="text" name="username" id="username" placeholder="username" />
                <br />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                />
                <br />
                <button>create</button>
            </section>
        </div>
    );
}

export default SignUpPage;