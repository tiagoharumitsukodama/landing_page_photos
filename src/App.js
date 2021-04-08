import React from 'react';
import Nav from './components/nav/nav';
import Header from './components/header/header';
import Section from './components/section/section';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Collections from './pages/Collection/collection';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App(){

    return (
        <Router>
            <div className="App">
                <Nav />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/collection" component={Collection} />
                    </Switch>
                <Footer />
            </div>
        </Router>
    );
}

const Home = () => (
    <>
        <Header />
        <Section />
    </>                
)

const Collection = () => (
    <>
        <Form />
        <Collections />
    </>
)