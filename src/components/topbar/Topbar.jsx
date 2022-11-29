import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <Link to="/" className='link'>
                    <div className="topLeft">
                        <span className="logo">Dashboard</span>
                    </div>
                </Link>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://splashirt.com/wp-content/uploads/2016/04/no_pants_are_the_best_pants_tee_shirt-rdd14bbc76b634c3c8ef7d99d070e8ba9_jg95x_325.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
