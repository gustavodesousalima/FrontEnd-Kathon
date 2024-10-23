
import styles from '../button/button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'; // Certifique-se de importar o ícone corretamente

function Button (props) {
    return (
        <div className={`${styles.button} ${styles[props.customClass]}`}> 
            <p>{props.text}</p>
            <FontAwesomeIcon className={styles.iconSeta} icon={faCircleArrowRight} 
            style={{ transform: 'rotate(-45deg)'}} size="lg"/>
        </div>
    );
}

export default Button;
