import Link from "next/link"
export default function Nav(){
    return(
        <div className="nav">
            <Link className="LINK" href="/">Home</Link>
            <Link className="LINK" href="/About">About</Link>
            <Link className="LINK" href="/Projects">Projects</Link>
        </div>
    
    )
    }