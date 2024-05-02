function ChildComponent({ value }) {
    return (
        < form >
            <fieldset>
                <legend>{value.name}</legend>
                <p>{value.desc}</p>
            </fieldset>
        </form >
    );
}
function ParentComponent() {
    let movies = [
        { name: "gilli", desc: "vijay and tirisha" },
        { name: 'ayan', desc: 'surya and tamana' },
        { name: 'I', desc: 'vikram and Amy Jackson' },
    ];
    return (<>
        {
            movies.map((value, index) => {
                return <ChildComponent key={index} value={value} />
            })
        }
        <br />
    </>)
}

export default ParentComponent;

