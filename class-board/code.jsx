// rendering list with components

function SampleComponent() {
    return <h1>sample value</h1>;
}
function TestingComponent() {
    let arr = [1, 2, 3, 4];
    return (
        <ul>
            {
                arr.map((value) => {
                    return <SampleComponent />;
                })
            }
        </ul>
    );
}

export default TestingComponent;



function TestingComponent() {
    // normal function
    function handleClick(value) {
        alert("button clicked " + value);
    }
    // function expression
    // let handleClick = function () {
    //     alert("button clicked ");
    // }
    return (
        <>
            <button onClick={() => {
                alert("arrow function");
            }}> 1 </button>
            <button onClick={() => handleClick(2)}> 2 </button>
            <button onClick={() => handleClick(3)}> 3 </button>
        </>
    );
}

export default TestingComponent;