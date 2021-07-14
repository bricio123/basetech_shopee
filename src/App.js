import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import Informatica from './Pages/Informatica';
import Moveis from './Pages/Moveis';
import Eletrodomestico from "./Pages/Eletrodomestico";
import MonitorDell from './Products/MonitorDell';
import TecladoMaxPrint from './Products/TecladoMaxPint';
import AdaptadotHDMIVGA from './Products/adapatadorHDMIVGA';
import ControleAcesso from './Products/ControleAcesso';
import FoneLogitech from "./Products/FoneLogitch";
import AdaptadotHDMIDisplay from './Products/adaptadorHdmiDisplayPort';
import AdaptadotHDMIMicroHDMI from './Products/AdaptadorHDMIMicroHDMI';
import AdaptadorMicroHDMIVGA from './Products/AdaptadorMicroHDMIVGA';
import CabosHDMIDeis from './Products/CabosHDMIDeis';
import CabosHDMI from './Products/CabosHDMI';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/Informatica" component={Informatica} />
      <Route path="/Moveis" component={Moveis} />
      <Route path="/Eletrodomestico" component={Eletrodomestico} />
      <Route path="/MonitorDell" component={MonitorDell} />
      <Route path="/TecladoMaxPrint" component={TecladoMaxPrint} />
      <Route path="/AdaptadotHDMIVGA" component={AdaptadotHDMIVGA}/>
      <Route path="/ControleAcesso" component={ ControleAcesso}/>
      <Route path="/FoneLogitech" component={ ControleAcesso}/>
      <Route path="/AdaptadotHDMIDisplay" component={AdaptadotHDMIDisplay}/>
      <Route path="/AdaptadotHDMIMicroHDMI" component={AdaptadotHDMIMicroHDMI}/>
      <Route path="/AdaptadorMicroHDMIVGA" component={AdaptadorMicroHDMIVGA}/>
      <Route path="/CabosHDMIDeis" component={CabosHDMIDeis}/>
      <Route path="/CabosHDMI" component={ CabosHDMI}/>
     
      

    </BrowserRouter>
  );
}




export default App;

