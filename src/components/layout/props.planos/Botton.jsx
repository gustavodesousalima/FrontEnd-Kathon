import Style from "./botton.module.css"

function botton({text, customBotton}){

    return(
        <div className={`${Style.botton} ${Style[customBotton]}`}>
            <p>{text}</p>
        </div>
    )
}

export default botton