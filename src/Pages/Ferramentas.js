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

let CaixaFerramentas = {
  src: "https://cdn.leroymerlin.com.br/products/jogo_de_ferramentas_108_pecas_dexter__89716123_0001_600x600.jpg",
  name: "Jogo de Ferramentas",
  desc: "Jogo de Ferramentas 108 peças Dexter",
};
let FuradeiraParafusadeira ={
  src: "https://images-americanas.b2w.io/produtos/01/00/img/2960279/9/2960279918_1SZ.jpg",
  name: "Parafusadeira Furadeira",
  desc: "Parafusadeira Furadeira Bosch Gsr1000 Smart 12v C/ Maleta",
}
let SacoPancadasVermelho ={
  src: "https://imgcentauro-a.akamaihd.net/900x900/51211400/saco-de-pancada-em-couro-punch-120cm-saco-enviado-cheio-img.jpg",
  name: "Saco de Pancada",
  desc: "Saco de Pancada em Couro Punch - 120cm (Saco cheio)",
}
let SacoPancadasPreto = {
  src: "https://decathlonpro.vteximg.com.br/arquivos/ids/2690138-1000-1000/saco-de-pancada-tb1000--100cm--20kg--tecido-poliester--4-correntes--outshock--2-anos-garantia1.jpg?v=637480542636530000",
  name: "Saco de Pancada Preto",
  desc: "Saco de Pancada em Couro Punch - 120cm (Saco cheio)",
  
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
      <h1 className="mt-5 pt-5 ml-3">Ferramentas e lazer</h1>
      <ContainerItens>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={CaixaFerramentas.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {CaixaFerramentas.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {CaixaFerramentas.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/CaixaFerramentas">
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
                  src={FuradeiraParafusadeira.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {FuradeiraParafusadeira.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {FuradeiraParafusadeira.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/FuradeiraParafusadeira">
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
                  src={SacoPancadasVermelho.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {SacoPancadasVermelho.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {SacoPancadasVermelho.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/SacoPancadasVermelho">
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
                  src={SacoPancadasPreto.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {SacoPancadasPreto.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {SacoPancadasPreto.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/SacoPancadasPreto">
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
