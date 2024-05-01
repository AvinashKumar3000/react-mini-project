import Card from '../components/section/Card';
import { MUSICS_MOCK } from '../mockData/musicDataMock';
import { useEffect, useState } from 'react';

function SearchPage() {
    const [songsList, setSongsList] = useState(MUSICS_MOCK);
    const [searchInput, setSearchInput] = useState("");
    useEffect(() => {
        if (searchInput === "") {
            setSongsList(MUSICS_MOCK);
        }
    }, [searchInput])

    function handleClick() {
        if (searchInput !== "") {
            const temp = songsList.filter((value) => {
                return value.title.toLowerCase().includes(searchInput);
            });
            setSongsList(temp);
        }
    }

    return (
        <>
            <section>
                <div className="search-section">
                    <input
                        type="text"
                        placeholder="search"
                        value={searchInput}
                        onChange={e => setSearchInput(e.target.value)}
                    />
                    <button onClick={handleClick}>search</button>
                </div>
                <div className="post-section">
                    {
                        songsList.map((value, idx) => {
                            return (
                                <Card cardInfo={value} key={idx} />
                            );
                        })
                    }
                </div>
            </section>

        </>
    );
}

export default SearchPage;