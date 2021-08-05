import { Avatar } from '@material-ui/core';
import React from 'react';
import './HeaderOption.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOption({ avatar, Icon, title, click}) {
    const user = useSelector(selectUser);
    return (
        <div onClick={ click && click } className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (
                <Avatar className="headerOption__icon" src={user?.photoUrl} >{ user && user?.displeyName }</Avatar>
            )}
            <h3 className="header__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
