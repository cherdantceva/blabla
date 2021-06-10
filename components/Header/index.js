import React from 'react';
import style from "./header_.module.scss";
import Button from "../ui/Button";

const Header = (props) => {
    const {logo} = props;

    return (
        <section className={style.header}>
            <a href="/" className={style.logo}>
                <img src={logo} alt='logo' />
            </a>
            <div className={style.headerMenu}>
                <a href="/" className={style.itemMenu}>
                    Стандарт
                </a>
                <a href="/" className={style.itemMenu}>
                    Донорам
                </a>
                <a href="/" className={style.itemMenu}>
                    Управление
                </a>
                <a href="/" className={style.itemMenu}>
                    Студенты
                </a>
            </div>
            <Button
                text='Поддержать'
                color='blue'
            />

        </section>
    )
}

export default Header