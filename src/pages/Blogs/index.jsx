import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import Article from '../../components/Article';
import CarouselCustom from '../../components/CarouselCustom';
import styles from './styles.module.scss';

function Blogs() {
    return (
        <React.Fragment>
            <CarouselCustom />
            <section className={styles.blogs}>
                <Content>
                    <div className={styles.siteLayoutContent}>
                        <Article />
                    </div>
                </Content>
            </section>
        </React.Fragment>
    );
}

export default Blogs;
