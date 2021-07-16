import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

import Footer from "../components/Footer";

import styled from "styled-components";

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
let MouseC3 = {
  src: "https://http2.mlstatic.com/D_NQ_NP_753621-MLB45616272574_042021-O.webp",
  name: "Mouse C3 plus",
  desc: "Mouse Usb Com Fio C3 Plus",
};

let MouseMaxPrint = {
  src: "https://http2.mlstatic.com/D_NQ_NP_735642-MLB46178227271_052021-O.webp",
  name: "Mouse MaxPrint",
  desc: "Mouse Óptico Maxprint 1000dpi Usb Preto 60615-7",
};
let Raspbary = {
  src: "https://http2.mlstatic.com/D_NQ_NP_964533-MLB45425038289_042021-O.webp",
  name: "Kit Raspberry",
  desc: "Kit Raspberry Pi 4 Case Abs + Fonte + Cooler + 1 micro HDMI ",
};
let AcessPoint = {
  src: "https://http2.mlstatic.com/D_NQ_NP_714209-MLB41446079064_042020-O.webp",
  name: "Acess Point",
  desc: " Access Point Ubiquiti Unifi Ap-ac-lite 1167 Mbps",
};
let CameraSeguranca = {
  src: "https://a-static.mlcdn.com.br/1500x1500/camera-wifi-full-hd-1080p-mibo-im4-360o-aplicativo-intelbras/shoptelbras/7027p/013b706bf7b85cf879feba8886672e4f.jpg",
  name: "Camera de Segurança interna",
  desc: "Camera Wifi Full Hd 1080p Mibo Im4 360º Aplicativo Intelbras",
};
let CaboVG = {
  src: " https://http2.mlstatic.com/D_NQ_NP_792832-MLB28738753269_112018-O.webp",
  name: "Cabo Vga",
  desc: "Cabo VGA para computadore e televisores",
};
let AdaptadorWifi = {
  src: "https://img.kalunga.com.br/fotosdeprodutos/610426d_4.jpg",
  name: "Adaptador wifi",
  desc: "Adaptador wireless N 300 mbps usb Mini TL-WN823N Tp Link CX 1 UN",
};
let Projetor = {
  src: "https://images4.kabum.com.br/produtos/fotos/94664/94664_1517255506_index_gg.jpg",
  name: "Projetor Epson",
  desc: "Projetor Epson 3500 Lumens XGA PowerLite X39",
};
let CaixaSom = {
  src: "https://www.fastshop.com.br//wcsstore/FastShopCAS/imagens/_AD_Audio/JBLFLIP5PTO/V2/JBLFLIP5PTO_447_2.jpg",
  name: "Caixa de som JBL",
  desc: "Caixa de Som Bluetooth JBL Flip 5 com 20W para Android",
};

//fazer no form

let pcI5com = {
  src: "https://images-americanas.b2w.io/produtos/01/00/img/3030661/4/3030661459_1GG.jpg",
  name: "Computador",
  desc: "Computador Fácil Intel Core i5 8GB SSD 120GB placa de vídeo ",
};
let pcI5sem = {
  src: "https://images-americanas.b2w.io/produtos/01/00/img/3030661/4/3030661459_1GG.jpg",
  name: "Computador",
  desc: "Computador Fácil Intel Core i5 8GB SSD 240GB ",
};
let pcAmd = {
  src: " https://images-americanas.b2w.io/produtos/01/00/img/63723/0/63723064_1GG.jpg",
  name: "Computador",
  desc: "Computador Amd Sempron 2650 - 4gb Ram - Ssd 120gb - Hoop ",
};
let switch48portas = {
  src: "https://images4.kabum.com.br/produtos/fotos/108184/switch-tp-link-rack-48-portas-10-100mbps-tl-sf1048_switch-tp-link-rack-48-portas-10-100mbps-tl-sf1048_1574193496_gg.jpg",
  name: "Switch TP-Link",
  desc: "Switch TP-Link Rack, 48 Portas 10/100Mbps - TL-SF1048",
};
let NotebookI3 = {
  src: "https://a-static.mlcdn.com.br/1500x1500/notebook-acer-aspire-3-a315-56-3090-intel-core-i3-8gb-256gb-ssd-156-led-windows-10/magazineluiza/226497400/2e6ac51f99fba60f470dbb751257a3a0.jpg",
  name: "Notebook Acer Aspire 3",
  desc: "Notebook Acer Aspire 3 Intel Core i3 - 8GB 256GB SSD 15,6” LED Windows 10",
};
let ImpressoraEpson = {
  src: "https://m.media-amazon.com/images/I/61minrTDZmL._AC_SL1000_.jpg",
  name: "Multifuncional Epson",
  desc: " Multifuncional Epson EcoTank L3150 - Tanque de Tinta Colorida, Wi-Fi Direct, USB",
};
let Airpod = {
  src: "https://a-static.mlcdn.com.br/618x463/airpods-com-estojo-de-recarga-apple/apple10/308401/5e13fd0c72470e5eaf2e1b2519f4787f.jpg",
  name: "AirPods",
  desc: "AirPods com Estojo de Recarga - Apple",
  
}
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
    <div>
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

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={MouseC3.src} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {MouseC3.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {MouseC3.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/MouseC3">
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
                  src={MouseMaxPrint.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {MouseMaxPrint.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {MouseMaxPrint.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/MouseMaxPrint">
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
                <img className={classes.img} alt="complex" src={Raspbary.src} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {Raspbary.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {Raspbary.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/Raspbary">
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
                  src={AcessPoint.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {AcessPoint.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {AcessPoint.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/AcessPoint">
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
                  src={CameraSeguranca.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {CameraSeguranca.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {CameraSeguranca.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/CameraSeguranca">
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
                <img className={classes.img} alt="complex" src={CaboVG.src} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {CaboVG.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {CaboVG.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/CaboVGA">
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
                  src={AdaptadorWifi.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {AdaptadorWifi.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {AdaptadorWifi.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/Jbl">
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
                <img className={classes.img} alt="complex" src={Projetor.src} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {Projetor.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {Projetor.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/Projetor">
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
                <img className={classes.img} alt="complex" src={CaixaSom.src} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {CaixaSom.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {CaixaSom.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/Jbl">
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
                <img className={classes.img} alt="complex" src={pcI5com.src} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {pcI5com.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {pcI5com.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Button variant="contained" color="secondary">
                      Ofertar
                    </Button>
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
                  src={switch48portas.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {switch48portas.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {switch48portas.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Button variant="contained" color="secondary">
                      Ofertar
                    </Button>
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
                  src={NotebookI3.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {NotebookI3.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {NotebookI3.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Button variant="contained" color="secondary">
                      Ofertar
                    </Button>
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
                <img className={classes.img} alt="complex" src={pcI5sem.src} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {pcI5sem.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {pcI5sem.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Button variant="contained" color="secondary">
                      Ofertar
                    </Button>
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
                <img className={classes.img} alt="complex" src={pcAmd.src} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {pcAmd.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {pcAmd.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Button variant="contained" color="secondary">
                      Ofertar
                    </Button>
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
                  src={ImpressoraEpson.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {ImpressoraEpson.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {ImpressoraEpson.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Button variant="contained" color="secondary">
                      Ofertar
                    </Button>
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
                  src={ Airpod.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    { Airpod.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    { Airpod.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Button variant="contained" color="secondary">
                      Ofertar
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

       
      </ContainerItens>
      <Footer />
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
