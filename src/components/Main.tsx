import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LoginAccount } from '../interfaces';
import { logoutAction } from '../redux/actions';

import './Main.scss'

const Main: React.FC<{ account?: LoginAccount, logoutAction?: () => void }> = (props) => {
    const username = props.account?.username || "unknown";
    const logoutAction = props.logoutAction || (() => {});
    return (
        <div className="Main">
            <div className="header">
                <ul>
                    <li><NavLink activeClassName="active" to="/home">首页</NavLink></li>
                    <li><NavLink activeClassName="active" to="/posts">发布文章</NavLink></li>
                    <li><NavLink activeClassName="active" to="/about">关于</NavLink></li>
                </ul>
                <div className="clear"></div>
                <div className="user">{username} {username === 'unknown' ? "" : (<button onClick={(e) => logoutAction()}>退出登录</button>)} </div>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        account: state.login.account
    }
}

export default connect(mapStateToProps, { logoutAction })(Main);