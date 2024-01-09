import style from './Image.module.css'

export function GoogleLogo({ imageUrl }) {
    return (
            <img className={style.GoogleLogo} src={'/images/google-icon-logo.svg'}/>
    );
}

export function AppleLogo({ imageUrl }) {
    return (
            <img className={style.AppleLogo} src={'/images/apple-logo.svg'}/>
    );
}

export function Xlogo({ imageUrl }) {
    return (
            <img className={style.Xlogo} src={'/images/X_logo_2023_original.svg'}/>
    );
}