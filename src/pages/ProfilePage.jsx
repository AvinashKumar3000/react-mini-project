import AboutSection from "../components/section/AboutSection";
import PostSectionTitle from "../components/section/PostSectionTitle";
import { useState } from "react";
import PostSection from "../components/section/PostSection";
import { USER_DETAILS_MOCK } from "../mockData/accountDetailsMock";

function ProfilePage() {
    const [accountDetails, setAccountDetails] = useState(USER_DETAILS_MOCK);
    const items = accountDetails.group.map(x => x.cards).flat();
    return (
        <section>
            <AboutSection
                accountDetails={accountDetails}
                setAccountDetails={setAccountDetails}
            />
            <PostSectionTitle title={"My songs"} />
            <PostSection items={items} />
        </section>
    );
}

export default ProfilePage;