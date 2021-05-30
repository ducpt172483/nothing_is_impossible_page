import { Breadcrumb, Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import Navigate from './components/Navigate';

const { Content, Footer } = Layout;

function App() {
    return (
        <div className="App">
            <Layout className="layout">
                <Navigate />
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </div>
    );
}

export default App;
