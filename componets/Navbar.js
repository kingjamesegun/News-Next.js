import Link from 'next/link'
import navStyles from '../styles/Nav.module.css';


function Navbar() {
    return (
        <div className={navStyles.nav}>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
