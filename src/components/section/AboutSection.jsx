import { useState } from 'react';


function AboutSection({ accountDetails, setAccountDetails }) {
    const [editable, setEditable] = useState(false);
    const [bio, setBio] = useState(accountDetails.bio);

    function handleEdit() {
        if (!editable) {
            // which means it is submitted
            // TODO: update in DB
            setAccountDetails({
                ...accountDetails,
                bio: bio
            });
        }
        setEditable(!editable);
    }
    return (<div className="about-section">
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
            <h3 id='account-username'>@ {accountDetails.username}</h3>
            <p id='account-bio' hidden={editable}>
                {bio}
            </p>
            <input
                className='content-editable'
                id="account-bio"
                type="text"
                name="account-bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                hidden={!editable}
            />
        </div>
        <div className="btn-sub-section">
            <button onClick={handleEdit}>
                <i className="fa-solid fa-pen-to-square" />
                <span>{editable ? 'update' : 'edit profile'}</span>
            </button>
            <button>
                <i className="fa-solid fa-right-from-bracket"></i>
                <span> sign-out </span>
            </button>
        </div>
    </div >);
}

export default AboutSection;