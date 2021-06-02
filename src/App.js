import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigate from './components/Navigate';
import Blogs from './pages/Blogs';
import AboutMe from './pages/AboutMe';

const { Footer } = Layout;

function App() {
    return (
        <div className="App">
            <Layout className="layout">
                <Navigate />

                <Switch>
                    <Route path="/blogs" exact>
                        <Blogs />
                    </Route>
                    <Route path="/about-me" exact>
                        <AboutMe />
                    </Route>
                </Switch>

                <Footer style={{ textAlign: 'center' }}>
                    Copyright 2021 DucPham Blog, All Right Reserved
                </Footer>
            </Layout>
        </div>
    );
}

export default App;
