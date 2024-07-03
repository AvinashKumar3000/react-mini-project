import { useContext, useEffect, useState } from "react";
import useAuthValidator from "../hooks/useAuthValidator";
import spotifyService from "../services/spotifyApi";
import { NotificationContext } from "../context/NotificationContext";
import Card from "../components/common/Card";
import { FavCountContext, FavCountProvider } from "../context/FavCountContext";
import { BookmarkCountContext, BookmarkCountProvider } from "../context/BookmarkCountContext";

const customStyle = {
    display: 'flex',
    flexWrap: 'wrap'
};

function DisplayAllCount() {
    const favContext = useContext(FavCountContext);
    const bookmarkContext = useContext(BookmarkCountContext);

    return (
        <div className="banner" style={{ color: 'blue' }}>
            <h1>
                Favorite count : <span style={{ color: 'red' }}> {favContext.count}</span>
            </h1>
            <h1>
                bookmark count : <span style={{ color: 'black' }}> {bookmarkContext.count}</span>
            </h1>
        </div>
    );
}

export default function ApplicationPage() {
    useAuthValidator();
    const { addNotification } = useContext(NotificationContext);

    const [songs, setSongs] = useState([]);
    const [songs2, setSongs2] = useState([]);

    useEffect(() => {
        // in below case I am using promise 😍
        spotifyService.getTop()
            .then((data) => {
                if (data) {
                    setSongs(data);
                }
                // console.log(data);
            })
            .catch(err => {
                addNotification("spotify api call completed with error" + err.toString(), true);
            })
            .finally(() => {
                addNotification("spotify api call completed");
            });
        spotifyService.getRecommended()
            .then((data) => {
                if (data) {
                    setSongs2(data);
                }
                // console.log(data);
            })
            .catch(err => {
                addNotification("spotify api call completed with error" + err.toString(), true);
            })
            .finally(() => {
                addNotification("spotify api call completed");
            });
    }, []);

    return (
        <div className="container">
            <FavCountProvider>
                <BookmarkCountProvider>
                    <DisplayAllCount />
                    <hr />
                    <h1>TOP 5 SONGS</h1>
                    <div className="card-group" style={customStyle}>
                        {
                            songs.map((value, index) => {
                                return <Card key={index} song={value} />
                            })
                        }
                    </div>
                    <hr />
                    <h1>Recommended songs</h1>
                    <div className="card-group" style={customStyle}>
                        {
                            songs2.map((value, index) => {
                                return <Card key={index} song={value} />
                            })
                        }
                    </div>
                </BookmarkCountProvider>
            </FavCountProvider>
        </div>
    );
}