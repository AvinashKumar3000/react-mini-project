import Header from "../components/header/Header";

function LibraryPage() {
    return (
        <>
            <Header></Header>
            <section>
                <div className="post-section">
                    <div className="card-shrink">
                        <div className="post-by">@account-name</div>
                        <div className="title">Heading</div>
                        <div className="desc">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                            doloremque, omnis laborum quis perspiciatis quae iusto, modi
                            accusantium voluptatibus nesciunt sequi? Cumque provident esse error
                            modi, nihil eum quisquam illum.
                        </div>
                        <div className="tags">
                            <div className="tag">hello</div>
                            <div className="tag">hello</div>
                        </div>
                        <div className="like">
                            <span className="like-count">0</span>
                            <i className="fa-solid fa-heart" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="group-by">@my-group-name</div>
                        <div className="title">Heading</div>
                        <div className="pic"> </div>
                        <div className="sub-title">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                            doloremque, omnis laborum quis perspiciatis quae iusto, modi
                            accusantium voluptatibus nesciunt sequi? Cumque provident esse error
                            modi, nihil eum quisquam illum.
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div>Home</div>
                <div>profile</div>
                <div>search</div>
                <div className="active">Library</div>
            </footer>
        </>

    );
}

export default LibraryPage;