import { Layout, Menu } from 'antd';
import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const { Header } = Layout;

function Navigate() {
    return (
        <Header className={styles.wrapperMenu}>
            <div className={styles.logo}>DucPham Blog</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/blogs">Trang chủ</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/about-me">Tác giả</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
}

export default Navigate;
