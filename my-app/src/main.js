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
export const elmstlye = {
    backgroundColor: "lightBlue",
    boxShadow: "0px 20px 10px black"
}   
export function sayAlert(){
    alert('Hi, Merlion')
}