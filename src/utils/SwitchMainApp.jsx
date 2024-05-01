import HomePage from "../pages/HomePage";
import LibraryPage from "../pages/LibraryPage";
import ProfilePage from "../pages/ProfilePage";
import SearchPage from "../pages/SearchPage";

export default function SwitchMainApp({ tab, setTab }) {
    switch (tab) {
        case "home":
            return <HomePage setTab={setTab} />;
        case "search":
            return <SearchPage setTab={setTab} />;
        case "library":
            return <LibraryPage setTab={setTab} />;
        case "profile":
            return <ProfilePage setTab={setTab} />;
        default:
            return <HomePage setTab={setTab} />;
    }
}