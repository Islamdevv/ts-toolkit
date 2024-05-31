import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import ReduxProvider from "./provider/ReduxProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ReduxProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
);
