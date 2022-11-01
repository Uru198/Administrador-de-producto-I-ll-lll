import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TodosProductos from './Componentes/TodosProductos';
import Producto from './Componentes/Producto';
import NuevoProducto from './Componentes/NuevoProducto';
import ActualizarProducto from './Componentes/ActualizarProducto';

const App = ()  =>{
  return (
    <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={() => <TodosProductos/> }></Route>
            <Route path="/producto/:id" exact render={() => <Producto/>}></Route>
            <Route path="/nuevo" render={() => <NuevoProducto/>}></Route>
            <Route path="/producto/editar/:id" render={() => <ActualizarProducto />} />
          </Switch>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
