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
import TV from "./Products/TV";
import Projetor from "./Products/Projetor";
import AdpatadorMicroHdmiparatipoC from "./Products/AdaptadorMicroHdmiparatipoC";
import FerramentasLazer from "./Pages/Ferramentas";
import ApoioPé from "./Products/Moveis/DescansoPe";
import sofa from "./Products/Moveis/Sofa";
import Purificador from "./Products/Moveis/PurificadorAgua";
import Geladeira from "./Products/Moveis/Geladeira";
import CadeiraPlastica from "./Products/Moveis/CadeiraPlastica";
import CadeiraGiratoria from "./Products/Moveis/CadeiraGiratoriaAlta";
import CadeiraEscritorio from "./Products/Moveis/CadeiraEscritorio";
import CadeiraGiratoriaCouro from "./Products/Moveis/CadeiraGiratoriaCouro";
import CadeiraUniversitaria from "./Products/Moveis/CadeiraUniversitaria";
import ComputadorI5com from "./Products/ComputadorI5comPlaca";
import ComputadtoI5sem from "./Products/ComputadorI5semPlaca";
import Switch48 from "./Products/Switch48";
import NotebookI3 from "./Products/NotebookI3";
import ComputadotAmd from "./Products/ComputadorAmd";
import ImpressoraTT from './Products/ImpressoraTT';
import Airpods from './Products/AirPods';
import Webcam from './Products/webcam';


//eletrodomesticos
import AspiradorPo from './Products/Eletrodomestico/AspiradorPo';
import MicroondasEletrolux from './Products/Eletrodomestico/MicoondasEletrolux';
import TVtcl49 from './Products/Eletrodomestico/TVTCL49';
import MicoondasLG from './Products/Eletrodomestico/MicroondasLG';
import TVTCL43 from './Products/Eletrodomestico/TV43TLC';
import TV32LG from './Products/Eletrodomestico/TV32LG';
import VentiladorCadence from './Products/Eletrodomestico/VentiladorCadence';
import MicroondasPanasonic from './Products/Eletrodomestico/MicroondasPanasonic';
import LavadoraAltaPressão from './Products/Eletrodomestico/LavadoraAltaPressão';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/Informatica" component={Informatica} />
      <Route path="/Moveis" component={Moveis} />
      <Route path="/Eletrodomestico" component={Eletrodomestico} />
      <Route path="/FerramentasLazer" component={FerramentasLazer} />
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
      <Route
        path="/AdpatadorMicroHdmiparatipoC"
        component={AdpatadorMicroHdmiparatipoC}
      />

      <Route path="/ApoioPé" component={ApoioPé} />
      <Route path="/sofa" component={sofa} />
      <Route path="/Purificador" component={Purificador} />
     
      <Route path="/CadeiraPlastica" component={CadeiraPlastica} />
      <Route path="/CadeiraGiratoria" component={CadeiraGiratoria} />
      <Route path="/CadeiraEscritorio" component={CadeiraEscritorio} />
      <Route path="/CadeiraGiratoriaCouro" component={CadeiraGiratoriaCouro} />
      <Route path="/CadeiraUniversitaria" component={CadeiraUniversitaria} />
      <Route path="/ComputadorI5com" component={ComputadorI5com} />
      <Route path="/ComputadtoI5sem" component={ComputadtoI5sem} />
      <Route path="/Switch48" component={Switch48} />
      <Route path="/NotebookI3" component={NotebookI3} />
      <Route path="/ComputadotAmd" component={ComputadotAmd} />
      <Route path="/ImpressoraTT" component={ImpressoraTT} />
      <Route path="/Airpods" component={Airpods} />
      <Route path="/Webcam" component={Webcam} />
    


      <Route path="/AspiradorPo" component={ AspiradorPo} />
      <Route path="/MicroondasEletrolux" component={ MicroondasEletrolux} />
      <Route path="/TVtcl49" component={ TVtcl49} />
      <Route path="/Geladeira" component={Geladeira} />
      <Route path="/MicoondasLG" component={MicoondasLG} />
      <Route path="/TVTCL43" component={TVTCL43} />
      <Route path="/TV32LG" component={TV32LG} />
      <Route path="/VentiladorCadence" component={VentiladorCadence} />
      <Route path="/MicroondasPanasonic" component={MicroondasPanasonic} />
      <Route path="/LavadoraAltaPressão" component={LavadoraAltaPressão} />
      
      
      
     
    </BrowserRouter>
  );
}

export default App;
