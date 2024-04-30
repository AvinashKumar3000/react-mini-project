import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import PostSection from "../components/section/PostSection";

function SearchPage() {
    return (
        <>
            <Header />
            <section>
                <div className="search-section">
                    <input type="text" placeholder="search" />
                    <button>search</button>
                </div>
                <PostSection />
            </section>
            <Footer />
        </>

    );
}

export default SearchPage;