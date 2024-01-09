import style from './Paragraph.module.css'

export function OrText() {
    return(
       <p className={style.OrText}>or</p> 
    )
}

export function CookiesText() {
    return(
        <p className={style.CookiesText}>By signing up, you agree to the <span className={style.BlueText}>Terms of Service</span> and <span className={style.BlueText}>Privacy Policy,</span> including <span className={style.BlueText}>Cookie Use.</span></p>
    )
}