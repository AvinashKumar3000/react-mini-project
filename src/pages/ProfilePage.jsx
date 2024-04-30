import Header from "../components/header/Header";

function ProfilePage() {
    return (
        <>
            <Header />
            <section>
                <div className="about-section">
                    <div className="profile-sub-section">
                        <div>
                            <div className="profile-pic"></div>
                        </div>
                        <div className="post-count">
                            <div>Post</div>
                            <div>100</div>
                        </div>
                    </div>
                    <div className="info-sub-section">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                            velit qui quis officiis eum et, vitae labore sed. Et iste omnis,
                            laborum in ea magni atque distinctio similique facilis mollitia.
                        </p>
                    </div>
                    <div className="btn-sub-section">
                        <button>
                            <i className="fa-solid fa-pen-to-square" />
                            <span>Edit profile</span>
                        </button>
                        <button>
                            <i className="fa-regular fa-square-plus" />
                            <span>Add post</span>
                        </button>
                    </div>
                </div>
                <div className="post-section-title">
                    <div>
                        <i className="fa-solid fa-signs-post" />
                        <span>MY POSTS</span>
                    </div>
                </div>
            </section>
            <footer>
                <div>Home</div>
                <div className="active">profile</div>
                <div>search</div>
                <div>Library</div>
            </footer>
        </>
    );
}

export default ProfilePage;