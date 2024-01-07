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
       <button className={style.buttongoogle}><img class={style.googlelogo}src="/google-icon-logo.svg"></img>Sign in With Google</button> 
    )
}

export function ButtonApple() {
    return(
       <button className={style.buttonapple}><img class={style.applelogo}src="/apple-logo.svg"></img>Sign in With Apple</button> 
    )
}