import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import App from "./components/App";
import Notiflix from "notiflix";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

Notiflix.Notify.init({
  width: "280px",
  position: "center-top",
  distance: "20px",
  opacity: 1,
  timeout: 1500,
  clickToClose: true,
  pauseOnHover: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
