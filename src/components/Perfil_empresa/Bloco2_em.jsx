import Styles from './Bloco2_em.module.css'
import CardHacka from '../Perfil_aluno/CardHacka'
import banner from '../../assets/imgs/banner.png'
import Icone_hacka from '../../assets/imgs/Icone_menor.png'
import CardEditavel from './CardEditavel'

function Bloco2_em({ TextoDesc, Titulo_sobre, Titulo_sobre2, Titulo_Participacao }){
    return(
<section className={Styles.SobreAluno}>
            <div className={Styles.Titulo_caia}>
                <h1 className={Styles.Titulo_sobre}>{Titulo_sobre}</h1>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M29.848 5.15439C29.4824 4.78871 29.0483 4.49864 28.5705 4.30074C28.0928 4.10284 27.5808 4.00098 27.0636 4.00098C26.5465 4.00098 26.0345 4.10284 25.5567 4.30074C25.079 4.49864 24.6449 4.78871 24.2793 5.15439L14.6875 14.7416C14.1153 15.318 13.66 15.9995 13.3465 16.7486L11.4385 21.3544C11.3107 21.6628 11.2772 22.0021 11.3423 22.3295C11.4074 22.6569 11.5682 22.9577 11.8042 23.1937C12.0402 23.4297 12.341 23.5905 12.6684 23.6556C12.9958 23.7207 13.3351 23.6872 13.6435 23.5594L18.2493 21.6514C18.9984 21.3379 19.68 20.8826 20.2563 20.3104L29.8458 10.7209C30.5836 9.98254 30.998 8.98144 30.998 7.93764C30.998 6.89383 30.5858 5.89273 29.848 5.15439Z" fill="#F0F0F0" fill-opacity="0.9" />
                    <path d="M10.1875 7.375C8.635 7.375 7.375 8.635 7.375 10.1875V24.8125C7.375 26.365 8.635 27.625 10.1875 27.625H24.8125C26.365 27.625 27.625 26.365 27.625 24.8125V19.75C27.625 19.3024 27.8028 18.8732 28.1193 18.5568C28.4357 18.2403 28.8649 18.0625 29.3125 18.0625C29.7601 18.0625 30.1893 18.2403 30.5057 18.5568C30.8222 18.8732 31 19.3024 31 19.75V24.8125C31 26.4535 30.3481 28.0273 29.1877 29.1877C28.0273 30.3481 26.4535 31 24.8125 31H10.1875C8.54647 31 6.97266 30.3481 5.81228 29.1877C4.6519 28.0273 4 26.4535 4 24.8125V10.1875C4 8.54647 4.6519 6.97266 5.81228 5.81228C6.97266 4.6519 8.54647 4 10.1875 4H15.25C15.6976 4 16.1268 4.17779 16.4432 4.49426C16.7597 4.81072 16.9375 5.23995 16.9375 5.6875C16.9375 6.13505 16.7597 6.56428 16.4432 6.88074C16.1268 7.19721 15.6976 7.375 15.25 7.375H10.1875Z" fill="#F0F0F0" fill-opacity="0.9" />
                </svg>
                </button>
            </div>
            <div className={Styles.Conteudo1}>
                <div className={Styles.Sobre}>
                    <div className={Styles.SobreTexto}>
                        <p className={Styles.TextoDesc}>{TextoDesc}</p>
                    </div>
                </div>
            </div>
            <div className={Styles.Titulo_caia}>
            <h1 className={Styles.Titulo_sobre2}>{Titulo_sobre2}</h1>
            <button>

            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M29.848 5.15439C29.4824 4.78871 29.0483 4.49864 28.5705 4.30074C28.0928 4.10284 27.5808 4.00098 27.0636 4.00098C26.5465 4.00098 26.0345 4.10284 25.5567 4.30074C25.079 4.49864 24.6449 4.78871 24.2793 5.15439L14.6875 14.7416C14.1153 15.318 13.66 15.9995 13.3465 16.7486L11.4385 21.3544C11.3107 21.6628 11.2772 22.0021 11.3423 22.3295C11.4074 22.6569 11.5682 22.9577 11.8042 23.1937C12.0402 23.4297 12.341 23.5905 12.6684 23.6556C12.9958 23.7207 13.3351 23.6872 13.6435 23.5594L18.2493 21.6514C18.9984 21.3379 19.68 20.8826 20.2563 20.3104L29.8458 10.7209C30.5836 9.98254 30.998 8.98144 30.998 7.93764C30.998 6.89383 30.5858 5.89273 29.848 5.15439Z" fill="#F0F0F0" fill-opacity="0.9" />
                    <path d="M10.1875 7.375C8.635 7.375 7.375 8.635 7.375 10.1875V24.8125C7.375 26.365 8.635 27.625 10.1875 27.625H24.8125C26.365 27.625 27.625 26.365 27.625 24.8125V19.75C27.625 19.3024 27.8028 18.8732 28.1193 18.5568C28.4357 18.2403 28.8649 18.0625 29.3125 18.0625C29.7601 18.0625 30.1893 18.2403 30.5057 18.5568C30.8222 18.8732 31 19.3024 31 19.75V24.8125C31 26.4535 30.3481 28.0273 29.1877 29.1877C28.0273 30.3481 26.4535 31 24.8125 31H10.1875C8.54647 31 6.97266 30.3481 5.81228 29.1877C4.6519 28.0273 4 26.4535 4 24.8125V10.1875C4 8.54647 4.6519 6.97266 5.81228 5.81228C6.97266 4.6519 8.54647 4 10.1875 4H15.25C15.6976 4 16.1268 4.17779 16.4432 4.49426C16.7597 4.81072 16.9375 5.23995 16.9375 5.6875C16.9375 6.13505 16.7597 6.56428 16.4432 6.88074C16.1268 7.19721 15.6976 7.375 15.25 7.375H10.1875Z" fill="#F0F0F0" fill-opacity="0.9" />
                </svg>
            </button>
                </div>
            <div className={Styles.Conteudo1}>
                <div className={Styles.Sobre2}>
                    <div className={Styles.Participaçoes}>
                    <CardEditavel Participacoes="Gerencie aqui os Hackathons que a empresa irá realizar."/>
                    </div>
                </div>
            </div>

            <div className={Styles.Titulo_caia}>
            <h1 className={Styles.Titulo_Participacao}>{Titulo_Participacao}</h1>
            <button>

            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M29.848 5.15439C29.4824 4.78871 29.0483 4.49864 28.5705 4.30074C28.0928 4.10284 27.5808 4.00098 27.0636 4.00098C26.5465 4.00098 26.0345 4.10284 25.5567 4.30074C25.079 4.49864 24.6449 4.78871 24.2793 5.15439L14.6875 14.7416C14.1153 15.318 13.66 15.9995 13.3465 16.7486L11.4385 21.3544C11.3107 21.6628 11.2772 22.0021 11.3423 22.3295C11.4074 22.6569 11.5682 22.9577 11.8042 23.1937C12.0402 23.4297 12.341 23.5905 12.6684 23.6556C12.9958 23.7207 13.3351 23.6872 13.6435 23.5594L18.2493 21.6514C18.9984 21.3379 19.68 20.8826 20.2563 20.3104L29.8458 10.7209C30.5836 9.98254 30.998 8.98144 30.998 7.93764C30.998 6.89383 30.5858 5.89273 29.848 5.15439Z" fill="#F0F0F0" fill-opacity="0.9" />
                    <path d="M10.1875 7.375C8.635 7.375 7.375 8.635 7.375 10.1875V24.8125C7.375 26.365 8.635 27.625 10.1875 27.625H24.8125C26.365 27.625 27.625 26.365 27.625 24.8125V19.75C27.625 19.3024 27.8028 18.8732 28.1193 18.5568C28.4357 18.2403 28.8649 18.0625 29.3125 18.0625C29.7601 18.0625 30.1893 18.2403 30.5057 18.5568C30.8222 18.8732 31 19.3024 31 19.75V24.8125C31 26.4535 30.3481 28.0273 29.1877 29.1877C28.0273 30.3481 26.4535 31 24.8125 31H10.1875C8.54647 31 6.97266 30.3481 5.81228 29.1877C4.6519 28.0273 4 26.4535 4 24.8125V10.1875C4 8.54647 4.6519 6.97266 5.81228 5.81228C6.97266 4.6519 8.54647 4 10.1875 4H15.25C15.6976 4 16.1268 4.17779 16.4432 4.49426C16.7597 4.81072 16.9375 5.23995 16.9375 5.6875C16.9375 6.13505 16.7597 6.56428 16.4432 6.88074C16.1268 7.19721 15.6976 7.375 15.25 7.375H10.1875Z" fill="#F0F0F0" fill-opacity="0.9" />
                </svg>
            </button>

            </div>
            <div className={Styles.Conteudo1}>
                <div className={Styles.Sobre2}>
                    <div className={Styles.Participaçoes}>
                    <CardEditavel Participacoes="Adicione aqui os Hackathons que a empresa deseja realizar."/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bloco2_em