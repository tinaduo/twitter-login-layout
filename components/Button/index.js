import style from './Button.module.css'
export function Button() {
    return(
       <button className={style.button}>Create Account</button> 
    )
}

export function ButtonTwo() {
    return(
       <button className={style.buttontwo}>Sign in</button> 
    )
}

export function ButtonGoogle() {
    return(
       <button className={style.buttongoogle}><img src="public/google-icon-logo.svg"></img>Sign in With Google</button> 
    )
}