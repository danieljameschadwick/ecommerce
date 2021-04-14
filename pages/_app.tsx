import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Wrapper } from "../src/util/state/Store";
import "../src/styles/base/_base.scss";

const App = ({ Component, pageProps }) => {
    const store = useStore();

    return (
        <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
            <Component {...pageProps} />
        </PersistGate>
    );
};

export default Wrapper.withRedux(App);
