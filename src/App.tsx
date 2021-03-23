import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import Footer from "./components/footer/Footer";
import Header from './components/header/Header';
import Landing from './pages/Landing';
import { Persistor, Store } from "./util/state/Store";
import ProductContainer from "./pages/ProductContainer";
import BasketContainer from "./pages/BasketContainer";

const App = () => {
    return (
        <Provider store={Store}>
            <PersistGate loading={null} persistor={Persistor}>
                <BrowserRouter>
                    <Header />

                    <Switch>
                        <Route exact path="/">
                            <Landing />
                        </Route>

                        <Route path="/products/:name/:id">
                            <ProductContainer />
                        </Route>

                        <Route path="/products">
                            <h1>Products</h1>
                        </Route>

                        <Route path="/basket">
                            <BasketContainer />
                        </Route>
                    </Switch>

                    <Footer />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

export default App;
