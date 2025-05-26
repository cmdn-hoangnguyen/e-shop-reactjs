import { BrowserRouter } from "react-router-dom";
import "./stylesheets/style.scss";
import { RouterOutlet } from "./app/core/modules/custom-router-dom/RouterOutlet";
import appRoutes from "./app/app.route";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <RouterOutlet routes={appRoutes} />
      </div>
    </BrowserRouter>
  );
};

export default App;
