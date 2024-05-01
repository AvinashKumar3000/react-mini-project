import ForgetPassPage from '../pages/ForgetPassPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import WelcomePage from '../pages/WelcomePage';

export default function SwitchAuthPages({ tab, setTab }) {
    switch (tab) {
        case "sign-in":
            return <SignInPage setTab={setTab} />;
        case "sign-up":
            return <SignUpPage setTab={setTab} />;
        case "forget-pass":
            return <ForgetPassPage setTab={setTab} />;
        default:
            return <WelcomePage setTab={setTab} />;
    }
}