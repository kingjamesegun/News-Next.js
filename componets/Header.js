import headerStyles from '../styles/Header.module.css';

function Header() {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Kings</span> News
            </h1>
            <p className={headerStyles.description}>
                Connect with the world to bring you best NEWS. We update you and get you covered.
            </p>
        </div>
    )
}

export default Header
