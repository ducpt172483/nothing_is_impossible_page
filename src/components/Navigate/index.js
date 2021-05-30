import { Layout, Menu } from 'antd';
import React from 'react';
import styles from './styles.module.scss';

const { Header } = Layout;

function Navigate() {
    return (
        <Header>
            <div className={styles.logo}>DucPham Blog</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Trang chủ</Menu.Item>
                <Menu.Item key="2">Tác giả</Menu.Item>
                <Menu.Item key="3">Facebook</Menu.Item>
            </Menu>
        </Header>
    );
}

export default Navigate;
