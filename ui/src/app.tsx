
export function App() {
    function handleClick() {
        fetch('/api/hello')
            .then(response => response.json())
            .then(data => alert(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }

    return (<>
         <h1>Hello World!</h1>
         <button onClick={handleClick}>Click Me</button>
    </>);
}