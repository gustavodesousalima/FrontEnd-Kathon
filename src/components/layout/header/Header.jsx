import styles from './Header.module.css'
import seta from '../../../assets/imgs/seta.svg'
import Button from '../button/button'
import Navbar from './headerComponents/Navbar'
import LinkComponent from '../link/LinkComponent'

function Header() {
    return (
        <header className={styles.header}>
            <LinkComponent linkTo="/" text={<div className={styles.logoHeader}></div>}/>
            <Navbar />
            <LinkComponent linkTo="/Login" text={<Button customClass="buttonHeader" text="Entrar"/>}>  </LinkComponent>
        </header>
    )
}

export default Header;