function PostSectionTitle({ title }) {
    return (
        <div className="post-section-title">
            <div>
                <i className="fa-solid fa-signs-post" />
                <span> {title}</span>
            </div>
        </div>
    );
}

export default PostSectionTitle;