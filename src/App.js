import AppRoutes from './routes/AppRoutes';
import './styles/App.css';


function App() {

  

  return (
    <div>
      <AppRoutes/>
      <div className="alert d-flex align-items-center gap-2 rounded-pill position-fixed p-3" id='add'>
        <p className="fs-4 my-auto">Adicionado</p>
        <i className="bi bi-check-circle-fill fs-2"></i>
      </div>
      <div className="alert d-flex align-items-center gap-2 rounded-pill position-fixed p-3" id='added'>
        <p className="fs-4 my-auto">Pizza já adicionada ao carrinho</p>
        <i className="bi bi-check-circle-fill fs-2"></i>
      </div>
    </div>
  );
}

export default App;