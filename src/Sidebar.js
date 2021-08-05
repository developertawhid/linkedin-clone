import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

function Sidebar() {
    const user = useSelector(selectUser)

    const recentItem = (topick) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topick}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://img.freepik.com/free-vector/smooth-mesh-blurred-background-multi-color-gradient-pattern-smooth-modern-watercolor-style-backdrop_124894-147.jpg?size=626&ext=jpg&ga=GA1.2.2099647507.1627689600" alt="" />
                <Avatar src={user?.photoUrl } className="sidebar__avatar" >{ user && user?.displeyName[0] }</Avatar>
                <h2>{ user.displeyName }</h2>
                <h4>{ user.email }</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who viewed you</p>
                    <p className="sidebar__statnumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>who viewed post</p>
                    <p className="sidebar__statnumber">2,448</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengieering")}
                {recentItem("dedign")}
                {recentItem("developer")}
            </div>
        </div>
    )
}

export default Sidebar
