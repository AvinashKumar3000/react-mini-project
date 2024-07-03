import { useRouteError } from "react-router-dom";

const errorStyle = {
    width: '90vw',
    height: '90vh'
};

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="container flex flx-center" style={errorStyle}>
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}