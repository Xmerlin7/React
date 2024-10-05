export default function MyReact(){
    const obj = {
        name: "Seif",
        aka: "merlion"
    }                                            
    return (
        <div>
            <h1 style={elmstlye}>
                Hello, {obj.aka}
            </h1>
            <button onClick={sayAlert}> Click</button>
        </div>
    )
}
const elmstlye = {
    backgroundColor: "lightBlue"
}   
export function sayAlert(){
    alert('Hi, Merlion')
}