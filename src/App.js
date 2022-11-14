import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Router';

function App() {
  return (
    <div className='max-width-[1440px] mx-auto'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
