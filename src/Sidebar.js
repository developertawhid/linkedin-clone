import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topick) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topick}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/92449803_103766361297602_2603867134865965056_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_ohc=9GvacuSnb8MAX9wG9Z-&_nc_ht=scontent.fdac31-1.fna&oh=e4774f8aa89b0b0cfb5f10f9532ab727&oe=612F2642" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Develloper Tawhid</h2>
                <h4>developertawhid@gmail.com</h4>
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
