import './posts.css'
export default function Post({name, children}) {

    return (
        <div className="posts">
            <h2>
                This is the post is written by <span style={{color: "red"}}>{name}</span>
            </h2>
            <hr />
            <h1> This is the post content</h1>
            {children}
        </div>
    );
}