import React from 'react';
import style from "./header_.module.scss";
import Button from "../ui/Button";

const Header = (props) => {
    const {logo} = props;
    console.log(props)
    return (
        <section className={style.header}>
            <a href="/" className={style.logo}>
                <img src={logo} alt='logo' />
            </a>
            <div className={style.headerMenu}>
                <a href="/">
                    Стандарт
                </a>
                <a href="/">
                    Донорам
                </a>
                <a href="/">
                    Управление
                </a>
                <a href="/">
                    Студенты
                </a>
            </div>
            <Button

            />

        </section>
    )
}

export default Header