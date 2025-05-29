import { BrowserRouter } from 'react-router-dom';

import './stylesheets/style.scss';
import { ToastContainer } from 'react-toastify';

import appRoutes from './app/app.route';
import { RouterOutlet } from './app/core/modules/custom-router-dom/RouterOutlet';
import { CartProvider } from './contexts/CartContext';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app">
          <RouterOutlet routes={appRoutes} />
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
