export function Header() {
    const style = {
        width: "100%",
        height: "80px",
        backgroundColor: "teal",
        boxSadow: "0 5px 10px rgba(0, 0, 0, 0.07)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px"
    }
    return (
        <div style={style}>
            <h1 >
                Merlin
            </h1>
        </div>
    )

}