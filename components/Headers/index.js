import style from './Header.module.css'

export function HeaderOne() {
    return(
       <h1 className={style.HeaderOne}>Happening Now</h1> 
    )
}

export function HeaderTwo() {
    return(
       <h2 className={style.HeaderTwo}>Join Today.</h2> 
    )
}

export function HeaderThree() {
    return(
       <h3 className={style.HeaderThree}>Already have an account?</h3> 
    )
}