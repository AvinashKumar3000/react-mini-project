import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import AboutSection from "../components/section/AboutSection";
import PostSectionTitle from "../components/section/PostSectiontitle";

function ProfilePage() {
    return (
        <>
            <Header />
            <section>
                <AboutSection />
                <PostSectionTitle />
            </section>
            <Footer />
        </>
    );
}

export default ProfilePage;