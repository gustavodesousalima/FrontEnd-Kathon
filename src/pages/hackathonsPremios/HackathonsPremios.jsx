import Premio from '../../components/Prêmios/Prêmios'
import trofeu from '../../assets/imgs/trofeu.png'
import styles from '../hackathonsPremios/HackathonsPremios.module.css'
import Premios from '../../components/layout/cardPreto/CardPessoas'
import Oculus from '../../assets/imgs/oculus_quest.png'
import Mentoria from '../../assets/imgs/Mentoria.png'
import Galaxy from '../../assets/imgs/Galaxy.png'
import Echo from '../../assets/imgs/Echo_Dot.png'
import Cloud from '../../assets/imgs/Cloud_Fast.png'
import Smart from '../../assets/imgs/Smart_Speaker.png'
import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'

function premios (){

    return(

        <>
        <Header/>
        <div className={styles.container_p}>
            <h1 className={styles.text_premio}> Total de Prêmios</h1>
            <div className={styles.container_premio}>
            <Premio img={trofeu} title='1° Lugar' context='Para todos os participantes da equipe: (até 5 pessoas)' desc_premios='- 1 Oculus Quest 2 Advanced All-in-One VR 128 GB (Branco)- 1 Accenture Cloud Fast Academy (1 semana, 100% remoto)- 4 encontros de mentoria com a Aliança Empreendedora (100% remoto)'/>
            <Premio img={trofeu} title='2° Lugar' context='Para todos os participantes da equipe: (até 5 pessoas)' desc_premios='- 1 Galaxy Buds2 Pro da Samsung 
            - 1 Accenture Cloud Fast Academy (1 semana, 100% remoto) 
            - 4 encontros de mentoria com a Aliança Empreendedora (100% remoto)'/>
            <Premio img={trofeu} title='3° Lugar' context='Para todos os participantes da equipe: (até 5 pessoas)' desc_premios='- 1 Alexa - Echo Dot (4ª Geração) - 1 Smart Speaker com Alexa | Música, informação e Casa Inteligente 
            - 1 Accenture Cloud Fast Academy (1 semana, 100% remoto) - 4 encontros de mentoria com a Aliança Empreendedora (100% remoto)'/>
            </div>
            <div className={styles.premiacao}>
                <Premios people={Oculus} job='Oculus Quest'/>
                <Premios people={Cloud} job='Accenture Cloud Fast'/>
                <Premios people={Mentoria} job='Mentoria com a Aliança Empreendedora'/>
                <Premios people={Galaxy} job='Galaxy Buds2'/>
            </div>
            <div className={styles.premiacao}>
                <Premios people={Echo} job='Echo Dot'/>
                <Premios people={Smart} job='Smart Speaker'/>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default premios