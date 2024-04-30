import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PostSection from "../components/section/PostSection";
function HomePage() {
    return (
        <>
            <Header />
            <section>
                <PostSection />
            </section>
            <Footer />
        </>

    );
}

export default HomePage;