import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

import styled from "styled-components";

import Navbar from "../components/Navbar";

let MonitorDell = {
  src: "https://m.media-amazon.com/images/I/812cGsOJhtL._AC_SL1500_.jpg",
  name: "Monitor Dell",
  desc: "Monitor dell full hd preto 1920x768",
};
let TecladoMaxprint = {
  src: "https://http2.mlstatic.com/D_NQ_NP_735642-MLB46178227271_052021-O.webp",
  name: "Teclado MaxPrint",
  desc: "Teclado Padrão preto Maxprint ",
};
let FoneLogitech = {
  src: "https://http2.mlstatic.com/D_NQ_NP_854669-MLB46294817361_062021-O.webp",
  name: "Fone de ouvido Logitech",
  desc: "fone de ouvido logitech preto",
};
let AdaptadorHDMIVGA = {
  src: "https://m.media-amazon.com/images/I/61JYb12Z3gL._AC_SL1000_.jpg",
  name: "Adaptador HDMI para VGA",
  desc: "Adaptador HDMI Para VGA preto 720px",
};
let Accesscontrol = {
  src: "https://backend.intelbras.com/sites/default/files/integration/bio_inox_plus_ss_311_mf_persp_esq_02.png",
  name: "Controle de acesso",
  desc: "Bio inox Plus SS 311 MF",
};
let AdaptadorDisplayportVGA = {
  src: "https://http2.mlstatic.com/D_NQ_NP_915091-MLB31733329548_082019-O.webp",
  name: "Adaptador Displayport  para VGA",
  desc: "Adapter Displayport/VGA",
};
let AdaptadorHDMIMicro = {
  src: "https://http2.mlstatic.com/D_NQ_NP_973961-MLB32326192902_092019-O.webp",
  name: "Adaptador HDMI para micro HDMI",
  desc: "Adaptador Micro Hdmi Macho Para Hdmi Femea",
};

let AdaptadorMicroVGA = {
  src: "https://http2.mlstatic.com/D_NQ_NP_974258-MLB45931672257_052021-O.webp",
  name: "Adaptador Micro HDMI para VGA",
  desc: "Conversor Micro Hdmi Para Vga Com Saida De Áudio",
};

let AdapterMicroUSBTipoC = {
  src: "https://http2.mlstatic.com/D_NQ_NP_672000-MLB31178309309_062019-O.webp",
  name: "Adaptador Micro",
  desc: "Adaptador V8 Micro Usb Femea X Tipo C Macho Galaxy A50",
};
let CaboHDMI = {
  src: "https://http2.mlstatic.com/D_NQ_NP_902808-MLB32879262825_112019-O.webp",
  name: "Cabo HDMI",
  desc: "Cabo Hdmi 2.0 Ultrahd 4k 3d 30awg 3 Metros Gold Mxt",
};
let CaboHDMIDeis = {
  src: "https://http2.mlstatic.com/D_NQ_NP_667234-MLB31064546707_062019-O.webp",
  name: "Cabo HDMI 10 metros",
  desc: "Cabo Hdmi 2.0 Pix 4k Ultrahd Hdr 19 Pinos 10 Metros 018-2230",
};

let switchPort = {
  src: "https://http2.mlstatic.com/D_NQ_NP_762479-MLB46598226879_072021-O.webp",
  name: "Switch Tp-link ",
  desc: "SWITCH TP-LINK TL-SF1005D 5 PORTAS",
};
let CaboDisplayPort = {
  src: "https://http2.mlstatic.com/D_NQ_NP_2X_769084-MLB45580832989_042021-F.webp",
  name: "Cabo displa ",
  desc: "Cabo Displayport Dell Original 1.2 4k 1.8m Blindado Dp X Dp",
};
let FoneOuvidoFelitron = {
  src: "https://a-static.mlcdn.com.br/1500x1500/headset-biauricular-epko-compact-felitron/rjshopimportmagazine/12605279058/820a44ba947a5610f50bf0ede859aee1.jpg",
  name: "Fone de Ouvido Felitron",
  desc: "Headset Biauricular Epko Compact FELITRON",
};
let InterfaceFelitron = {
  src: "http://www.felitron.com.br/wp-content/uploads/2019/01/interface-1000-1.png",
  name: "interfce Felitron",
  desc: "Interface para fone de ouvido Felitron preto",
};
let TecladoC3Plus = {
  src: "https://http2.mlstatic.com/D_NQ_NP_953369-MLB44983888879_022021-O.webp",
  name: "Teclado C3 plus",
  desc: "Teclado C3 Plus Usb Com Fio Código Kb-15",
};
let TecladoDell = {
  src: "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/peripherals/input_devices/dell/keyboards/km5221w/pdp/dell-keyboard-mouse-km5221w-pdp-campaign-hero-504x350.jpg?fmt=jpg&wid=504&hei=350",
  name: "Teclado Dell ",
  desc: "Teclado e mouse sem fio Dell Pro — KM5221W",
};
let FechaduraMagnetica = {
  src: "https://http2.mlstatic.com/D_NQ_NP_893393-MLB45196366451_032021-O.webp",
  name: "Fechadura Magnética",
  desc: "Fechadura Magnética Eletroimã Intelbras Fe20150 150kg",
};
let Ntc = {
  src: "https://images3.kabum.com.br/produtos/fotos/113193/computador-ntc-intel-pentium-g5400-4gb-ssd-60gb-windows-10-pro-2134_1589374683_gg.jpg",
  name: "Computador NTC Intel",
  desc: " Mini Computador NTC",
};
let MonitorAOC = {
  src: "https://a-static.mlcdn.com.br/618x463/monitor-185-wide-hd-d-sub-preto-e970swnl-aoc/tssuprimentos/55566633323232323/b7221e450e464498776085515dcbf225.jpg",
  name: "Monitor AOC",
  desc: "Monitor 18,5” wide hd d-sub preto e970swnl aoc",
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "10px",
    maxWidth: 600,
  },
  image: {
    width: 200,
    height: 200,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <h1 className="mt-5 pt-5 ml-3">Ferramentas e lazer</h1>
      <ContainerItens>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={MonitorDell.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {MonitorDell.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {MonitorDell.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/MonitorDell">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={TecladoMaxprint.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {TecladoMaxprint.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {TecladoMaxprint.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/TecladoMaxPrint">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={FoneLogitech.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {FoneLogitech.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {FoneLogitech.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/FoneLogitech">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={AdaptadorHDMIVGA.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {AdaptadorHDMIVGA.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {AdaptadorHDMIVGA.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/AdaptadotHDMIVGA">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={Accesscontrol.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {Accesscontrol.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {Accesscontrol.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/ControleAcesso">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={AdaptadorDisplayportVGA.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {AdaptadorDisplayportVGA.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {AdaptadorDisplayportVGA.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/AdaptadotHDMIDisplay">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={AdaptadorHDMIMicro.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {AdaptadorHDMIMicro.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {AdaptadorHDMIMicro.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/AdaptadotHDMIMicroHDMI">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={AdaptadorMicroVGA.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {AdaptadorMicroVGA.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {AdaptadorMicroVGA.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/AdaptadorMicroHDMIVGA">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={AdapterMicroUSBTipoC.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {AdapterMicroUSBTipoC.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {AdapterMicroUSBTipoC.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/AdpatadorMicroHdmiparatipoC">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={CaboHDMI.src} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {CaboHDMI.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {CaboHDMI.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/CabosHDMI">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={CaboHDMIDeis.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {CaboHDMIDeis.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {CaboHDMIDeis.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/CabosHDMIDeis">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={switchPort.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {switchPort.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {switchPort.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/SwitchPort">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={CaboDisplayPort.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {CaboDisplayPort.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {CaboDisplayPort.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/CaboDisplayPort">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={FoneOuvidoFelitron.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {FoneOuvidoFelitron.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {FoneOuvidoFelitron.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/FoneFelitron">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={InterfaceFelitron.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {InterfaceFelitron.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {InterfaceFelitron.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/InterfaceFelitron">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={TecladoC3Plus.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {TecladoC3Plus.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {TecladoC3Plus.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/TecladoC3Plus">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={TecladoDell.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {TecladoDell.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {TecladoDell.desc}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/TecladoDell">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={Ntc.src} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {Ntc.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {Ntc.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/Ntc">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={FechaduraMagnetica.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {FechaduraMagnetica.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {FechaduraMagnetica.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/FechaduraMagnetica">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={MonitorAOC.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {MonitorAOC.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {MonitorAOC.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/MonitorAOC">
                      <Button variant="contained" color="secondary">
                        Ofertar
                      </Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </ContainerItens>
    </div>
  );
}
const ContainerItens = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  margin: 0 auto;
  margin-top: 60px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 1376px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-self: center;
    align-items: center;
  }
  @media (max-width: 1187px) {
    grid-column: 200px;
    align-items: center;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 938px) {
    justify-items: center;
    grid-column: 200px;
    align-items: center;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 550px) {
    justify-items: center;
    grid-column: 200px;
    align-items: center;
    display: grid;
    justify-content: center;

    grid-template-columns: 1fr;
  }
`;
