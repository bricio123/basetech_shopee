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

let MicoondasEltrolux = {
  src: "https://a-static.mlcdn.com.br/1500x1500/micro-ondas-electrolux-painel-seguro-20l-mtd30-220-volts/friopecas/120390/5292f02490783aeecdece93fbe4f73ba.jpg",
  name: "Micro-ondas Electrolux",
  desc: "Micro-ondas Electrolux Painel Seguro 20L MTD30 - 220 volts",
};

let MicroondasLG = {
  src: "https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=7586152",
  name: "Micro-ondas Lg",
  desc: "Micro-ondas Easy Clean LG Branco 30L 220V MS3052RA",
};

let tvtcl49 ={
  src: "https://images1.kabum.com.br/produtos/fotos/115691/android-tv-led-50-uhd-4k-semp-tcl-3-hdmi-2-usb-wi-fi-bluetooth-hdr-50sk8300_1596462224_gg.jpg",
  name: "Smart TV Led 49",
  desc: "Smart TV Led 49 Semp tcl 4K HDR Android Wi-Fi 3 HDMI 2 USB ",
}
let SmartLG32 = {
  src: "https://a-static.mlcdn.com.br/618x463/smart-tv-hd-led-32-lg-32lm625bpsb-wi-fi-bluetooth-hdr-inteligencia-artificial-3-hdmi-2-usb/magazineluiza/193428500/c62b44c9dc5d0a394ed9d1480a373211.jpg",
  name: "Smart TV HD LED 32",
  desc: "Smart TV HD LED 32” LG 32LM625BPSB Wi-Fi Bluetooth - HDR Inteligência Artificial 3 HDMI 2 USB",
};
let tvTCL = {
  src: "https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1146853164",
  name: "Smart TV LED 43",
  desc: "Smart TV LED 43 Full HD TCL Android, Google Assistant, HDR, Chromecast Integrado, Bluetooth e HDMI",
};
let tv = {
  src: "https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1840213028",
  name: "Smart TV LED 55",
  desc: "Smart TV LED 55 4K UHD LG 55UN731C 3 HDMI 2 USB Wi-Fi Assitente Virtual Bluetooth",
};
let ventiladorLaranja = {
  src: "https://a-static.mlcdn.com.br/1500x1500/ventilador-cadence-vtr478-turbo-conforto-40cm-preto-laranja/lojasguaibim1/866712/a6f5782a18680a80b479074f714d444e.jpg",
  name: "Ventilador",
  desc: "Ventilador Cadence VTR478 Turbo Conforto 40cm Preto/Laranja",
}
let microondasPanasonic = {
  src: "https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=877651339",
  name: "Micro-ondas Panasonic",
  desc: "Forno de Micro-ondas Panasonic NN-ST65HWRUN com Receitas Pré-Programadas - 32L",
}
let lavajato = {
  src: "https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1212904873",
  name: "Lavadora de Alta Pressão",
  desc: " Lavadora de Alta Pressão Philco  com Mangueira de Pressão e Cabo Elétrico com 5 Metros",
}
let AspiradorWap = {
  src: "https://statics.angeloni.com.br/eletro/files/4414946/4414946_2_zoom.jpg",
  name: "Aspirador de Água e Pó",
  desc: "Aspirador de Água e Pó 1400W 12 litros WAP GTW Inox",
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
    <div className={classes.root}>
      <Navbar />
      <h1 className="mt-5 pt-5 ml-3">Eletrodoméstico</h1>
      <ContainerItens>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={MicoondasEltrolux.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {MicoondasEltrolux.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {MicoondasEltrolux.desc}
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
                  src={tvtcl49.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {tvtcl49.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {tvtcl49.desc}
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
                  src={ MicroondasLG.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    { MicroondasLG.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    { MicroondasLG.desc}
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
                <img className={classes.img} alt="complex" src={tvTCL.src} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {tvTCL.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {tvTCL.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{ cursor: "pointer" }}
                    className="p-0"
                  >
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
                <img className={classes.img} alt="complex" src={tv.src} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {tv.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {tv.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/TV">
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
                  src={SmartLG32.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {SmartLG32.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {SmartLG32.desc}
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
                  src={ventiladorLaranja.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {ventiladorLaranja.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {ventiladorLaranja.desc}
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
                  src={ microondasPanasonic.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    { microondasPanasonic.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    { microondasPanasonic.desc}
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
                  src={ lavajato.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    { lavajato.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    { lavajato.desc}
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
                  src={ AspiradorWap.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    { AspiradorWap.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    { AspiradorWap.desc}
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
