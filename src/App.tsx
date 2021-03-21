import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Header from './components/header/Header';
import Landing from './pages/Landing';
import ProductContainer from "./pages/ProductContainer";

const App = () => {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path="/products/:name/:id">
                    <ProductContainer />
                </Route>

                <Route path="/products">
                    <h1>Products</h1>
                </Route>

                <Route path="/">
                    <Landing />
                </Route>
            </Switch>

            <Footer />
        </BrowserRouter>
    );
};

export default App;
