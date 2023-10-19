import './App.css';
import AppRoutes from './AppRoutes'
import { Provider } from 'react-redux';
import { store } from './components/store/store';

function App() {
  return (
    <div>
      <Provider store={store}>
      <AppRoutes /> 
      </Provider>
    </div>
  );
}
export default App;