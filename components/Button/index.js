import style from './Button.module.css'
import { AppleLogo, GoogleLogo, XLogo } from '@/components/Image'

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
       <button className={style.buttongoogle}><GoogleLogo/>Sign in With Google</button> 
    )
}

export function ButtonApple() {
    return(
       <button className={style.buttonapple}><AppleLogo/>Sign in With Apple</button> 
    )
}