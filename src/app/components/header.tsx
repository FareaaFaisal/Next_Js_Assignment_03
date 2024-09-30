import Link from "next/link"

export default function Header() {
    return(
        <div className="header">
            <ul className="header-button">
            <Link href={"/"}><li>Profile</li></Link>
            <Link href={"portfolio"}><li>Portfolio</li></Link>
            <Link href={"about-us"}><li>About Us</li></Link>
            <Link href={"contact-us"}><li>Contact Us</li></Link>
            
            </ul>
            
        </div>
    )
}