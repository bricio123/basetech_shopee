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

let sofaHabitato = {
  src: "https://www.habitato.com.br/franquias/2/23045/editor-html/5017083.jpg",
  name: "SOFÁ IBIZA DE CANTO",
  desc: "Espuma D-28, revestida por manta de fibra poliéster",
};



let CadeiraPlasticaBranca = {
  src: " https://cdn.leroymerlin.com.br/products/cadeira_plastico_vila_boa_vista__74x50cm_branco_87765860_e733_1800x1800.jpeg",
  name: "Cadeira Plástico",
  desc: "Cadeira Plástico Vila Boa Vista 74x50cm Branco Antares",
};

let cadeiraTeamLeader = {
  src: "https://images.madeiramadeira.com.br/product/images/31613247-cadeira-caixa-alta-secretaria-giratoria-preta-portaria7000-1527-2-463x525.jpg?width=600&canvas=600,600&bg-color=FFFFFF",
  name: "Cadeira Giratória",
  desc: "Cadeira Caixa Alta Secretária Giratória Preta Portaria PRETO",
};

let cadeiraAgentCouro = {

  src: "https://http2.mlstatic.com/D_NQ_NP_2X_888416-MLB44332706796_122020-F.webp",
  name: "Cadeira Giratória Couro",
  desc: "Cadeira Giratória Ultra Couro Ecológico Com Braço",
 
}
let cadeiraTI = {

  src: "https://images.madeiramadeira.com.br/product/images/74896154-cadeira-para-escritorio-com-tela-brizza-presidente-plaxmetal-7908439631532-2_zoom-1500x1500.jpg?width=600&canvas=600,600&bg-color=FFFFFF",
  name: "Cadeira para Escritório",
  desc: "Cadeira para Escritório com Tela Brizza Presidente Plaxmetal Preto",
  
}

let DescansoPe = {
  src: "https://http2.mlstatic.com/D_NQ_NP_639900-MLB42286850517_062020-O.webp",
  name: "Apoio para os pés",
  desc: "Apoio Descanso Base Suporte Ergonômico Para Os Pés - Preto",
};
let CadeiraVermelha = {

  src: "https://http2.mlstatic.com/D_NQ_NP_962552-MLB31027471287_062019-O.webp",
  name: "Cadeira Universitária",
  desc: "Cadeira Universitária Diretor Sky C/ Porta Livros ",
  
}
let CadeiraPresidente = {
  src: "https://images-americanas.b2w.io/produtos/01/00/img/2431811/5/2431811577_1GG.jpg",
  name: "Cadeira Presidente",
  desc: "Cadeira Presidente Escritório Giratória com Braço 3D Assento Couro Ecológico  Preta",
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
      <h1 className="mt-5 pt-5 ml-3">Móveis</h1>
      <ContainerItens>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={sofaHabitato.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {sofaHabitato.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {sofaHabitato.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/sofa">
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
                  src={CadeiraPlasticaBranca.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {CadeiraPlasticaBranca.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {CadeiraPlasticaBranca.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/CadeiraPlastica">
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
                  src={cadeiraTeamLeader.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {cadeiraTeamLeader.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {cadeiraTeamLeader.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/CadeiraGiratoria">
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
                  src={cadeiraAgentCouro.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {cadeiraAgentCouro.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {cadeiraAgentCouro.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/CadeiraGiratoriaCouro">
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
                  src={ cadeiraTI.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    { cadeiraTI.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    { cadeiraTI.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/CadeiraEscritorio">
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
                  src={DescansoPe.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {DescansoPe.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {DescansoPe.desc}
                  </Typography>
                 
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to="/ApoioPé">
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
                  src={ CadeiraVermelha.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    { CadeiraVermelha.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    { CadeiraVermelha.desc}
                  </Typography>
                 
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to='/CadeiraUniversitaria'>
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
                  src={ CadeiraPresidente.src}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs spacing={5}>
                  <Typography gutterBottom variant="subtitle1">
                    { CadeiraPresidente.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    { CadeiraPresidente.desc}
                  </Typography>
                 
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <Link to='/CadeiraPresidente'>
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
