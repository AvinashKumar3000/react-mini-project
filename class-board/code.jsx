// rendering
function TestingComponent() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    function handleClick(value) {
        alert("btn clicked " + value);
    }
    return (
        <>
            <button onClick={() => handleClick(1)}>1</button>
            <button onClick={() => handleClick(2)}>2</button>
            <button onClick={() => handleClick(3)}>3</button>
        </>
    );
}

export default TestingComponent;