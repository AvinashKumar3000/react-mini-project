// rendering
function TestingComponent() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    function handleClick(value) {
        alert("btn clicked " + value);
    }
    return (
        <>
            {
                arr.map((value) => {
                    return <button onClick={() => handleClick(value)}>{value}</button>;
                })
            }
        </>
    );
}

export default TestingComponent;