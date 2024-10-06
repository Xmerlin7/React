import './sideBar.css'
import TagButton from './tagButton'
export default function SideBar() {
    const img = {
        width : "20px",
        margin: "8px",
       

    }

    return (
        <div className='sidebar'>
            <TagButton />
            <TagButton >
                *
            </TagButton>
            <TagButton >
                <img style={img} 
                src='logo192.png' alt='hi'></img>
            </TagButton>
        
        </div>
    )
}