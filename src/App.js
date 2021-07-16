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
import Informatica from "./Pages/Informatica";
import Moveis from "./Pages/Moveis";
import Eletrodomestico from "./Pages/Eletrodomestico";
import MonitorDell from "./Products/MonitorDell";
import TecladoMaxPrint from "./Products/TecladoMaxPint";
import AdaptadotHDMIVGA from "./Products/adapatadorHDMIVGA";
import ControleAcesso from "./Products/ControleAcesso";
import FoneLogitech from "./Products/FoneLogitch";
import AdaptadotHDMIDisplay from "./Products/adaptadorHdmiDisplayPort";
import AdaptadotHDMIMicroHDMI from "./Products/AdaptadorHDMIMicroHDMI";
import AdaptadorMicroHDMIVGA from "./Products/AdaptadorMicroHDMIVGA";
import CabosHDMIDeis from "./Products/CabosHDMIDeis";
import CabosHDMI from "./Products/CabosHDMI";
import SwitchPort from "./Products/Switch";
import CaboDisplayPort from "./Products/CaboDisplayPort";
import FoneFelitron from "./Products/FoneOuvidoFelitron";
import InterfaceFelitron from "./Products/InterfaceFelitron";
import TecladoC3Plus from "./Products/TecladoC3Plus";
import TecladoDell from "./Products/TecladoDell";
import FechaduraMagnetica from "./Products/FechaduraMagnetica";
import Ntc from "./Products/NTC";
import MonitorAOC from "./Products/MonitorAOC";
import MouseC3 from "./Products/MouseC3Plus";
import MouseMaxPrint from "./Products/MouseMaxPrint";
import Raspbary from "./Products/RaspBarry";
import AcessPoint from "./Products/AcessPoint";
import CameraSeguranca from "./Products/CameraSeguranca";
import CaboVGA from "./Products/CaboVGA";
import Jbl from "./Products/Jbl";
import TV from './Products/TV';
import Projetor from './Products/Projetor'
import AdpatadorMicroHdmiparatipoC from './Products/AdaptadorMicroHdmiparatipoC';
import FerramentasLazer from './Pages/Ferramentas'


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/Informatica" component={Informatica} />
      <Route path="/Moveis" component={Moveis} />
      <Route path="/Eletrodomestico" component={Eletrodomestico} />
      <Route path='/FerramentasLazer' component={FerramentasLazer}/>
      <Route path="/MonitorDell" component={MonitorDell} />
      <Route path="/TecladoMaxPrint" component={TecladoMaxPrint} />
      <Route path="/AdaptadotHDMIVGA" component={AdaptadotHDMIVGA} />
      <Route path="/ControleAcesso" component={ControleAcesso} />
      <Route path="/FoneLogitech" component={FoneLogitech} />
      <Route path="/AdaptadotHDMIDisplay" component={AdaptadotHDMIDisplay} />
      <Route
        path="/AdaptadotHDMIMicroHDMI"
        component={AdaptadotHDMIMicroHDMI}
      />
      <Route path="/AdaptadorMicroHDMIVGA" component={AdaptadorMicroHDMIVGA} />
      <Route path="/CabosHDMIDeis" component={CabosHDMIDeis} />
      <Route path="/CabosHDMI" component={CabosHDMI} />
      <Route path="/SwitchPort" component={SwitchPort} />
      <Route path="/CaboDisplayPort" component={CaboDisplayPort} />
      <Route path="/FoneFelitron" component={FoneFelitron} />
      <Route path="/InterfaceFelitron" component={InterfaceFelitron} />
      <Route path="/TecladoC3Plus" component={TecladoC3Plus} />
      <Route path="/TecladoDell" component={TecladoDell} />
      <Route path="/FechaduraMagnetica" component={FechaduraMagnetica} />
      <Route path="/Ntc" component={Ntc} />
      <Route path="/MonitorAOC" component={MonitorAOC} />
      <Route path="/MouseC3" component={MouseC3} />
      <Route path="/MouseMaxPrint" component={MouseMaxPrint} />
      <Route path="/Raspbary" component={Raspbary} />
      <Route path="/AcessPoint" component={AcessPoint} />
      <Route path="/CameraSeguranca" component={CameraSeguranca} />
      <Route path="/CaboVGA" component={CaboVGA} />
      <Route path="/Jbl" component={Jbl} />
      <Route path="/TV" component={TV} />
      <Route path="/Projetor" component={Projetor} />
      <Route path="/AdpatadorMicroHdmiparatipoC" component={AdpatadorMicroHdmiparatipoC} />
      
    </BrowserRouter>
  );
}

export default App;
