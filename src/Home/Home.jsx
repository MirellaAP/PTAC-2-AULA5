import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
   
    return (
        <div>
            <h1 class = "titulo">Home</h1>
            <Link to="/todo" class = "link">Clique aqui para voltar</Link>
            <p class = "descricao">Bem-vindo a minha lista de perfumes favoritos!! Abaixo você encontra as características de alguns deles</p>

        <div class="cardix">
            <br></br>
        <img src="https://www.giraofertas.com.br/wp-content/uploads/2022/07/Hypnotic-Poison-Dior-Eau-de-Toilette-Feminino-08.jpg" class="imagem"></img>
        <br></br>
        <h3 class="perfume-h3">Hypnotic Poison</h3>
        <p class="perfume-p">R$425,00</p>
        <p class="perfume-p">Notas: doces de damasco, ameixa e coco. Evolui em notas de coração florais e femininas de jasmim, tuberosa, lírio-do- vale e rosas e o amadeirado quente e provocante do pau-Brasil e da alcaravia.</p>
        </div>

        <div class="cardix">
            <br></br>
        <img src="https://www.giraofertas.com.br/wp-content/uploads/2022/07/Hypnotic-Poison-Dior-Eau-de-Toilette-Feminino-08.jpg" class="imagem"></img>
        <br></br>
        <h3 class="perfume-h3">Hypnotic Poison</h3>
        <p class="perfume-p"></p>
        <p class="perfume-p">Notas: doces de damasco, ameixa e coco. Evolui em notas de coração florais e femininas de jasmim, tuberosa, lírio-do- vale e rosas e o amadeirado quente e provocante do pau-Brasil e da alcaravia.</p>
        </div>

        <div class="cardix">
            <br></br>
        <img src="https://www.sephora.com/productimages/product/p436489-av-01-zoom.jpg" class="imagem"></img>
        <br></br>
        <h3 class="perfume-h3">Lost Cherry</h3>
        <p class="perfume-p">R$3.690,00</p>
        <p class="perfume-p">Notas: doces de damasco, ameixa e coco. Evolui em notas de coração florais e femininas de jasmim, tuberosa, lírio-do- vale e rosas e o amadeirado quente e provocante do pau-Brasil e da alcaravia.</p>
        </div>
            




        </div>

        

    );
}

