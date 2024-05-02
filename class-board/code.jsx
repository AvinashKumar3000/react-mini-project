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