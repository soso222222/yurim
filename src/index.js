import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Style/GlobalStyles";
import App from "./App";
// import { store } from "./Common/store"; 
import theme from "./Style/theme";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";

// let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
                <BrowserRouter>
                    <GlobalStyles />
                    <App />
                </BrowserRouter>
            {/* </PersistGate> */}
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
