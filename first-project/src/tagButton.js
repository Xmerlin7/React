
export default function TagButton({ children }) {
    return (
        <>
            
            <button className="tagButton">
                <div>
                    Click me
                </div>
                <div>

                {children}
                </div>
                </button>
        </>
    )
}