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
        <p class="perfume-p">Marca: Dior</p>
        <p class="perfume-p">Notas: doces de damasco, ameixa e coco. Evolui em notas de coração florais e femininas de jasmim, tuberosa, lírio-do- vale e rosas e o amadeirado quente e provocante do pau-Brasil e da alcaravia.</p>
        </div>

        <div class="cardix">
            <br></br>
        <img src="https://thumbor.cartpanda.com/1OLxgk120--OkzRM0EkN9Inr0Z4=/1024x0/https://assets.mycartpanda.com/static/products_images/ed/5d/69/1680626634180.jpeg?v=13252247658" class="imagem"></img>
        <br></br>
        <h3 class="perfume-h3">Good Girl: Velvet Fatale</h3>
        <p class="perfume-p">549,90</p>
        <p class="perfume-p">Marca: Carolina Herrera</p>
        <p class="perfume-p">Notas: As notas de topo são: Amêndoa, Café, Limão e Bergamota. As notas de coração são: Tuberosa, Jasmim, Rosa Búlgara e Raíz de Orris.</p>
        </div>

        <div class="cardix">
            <br></br>
        <img src="https://www.sephora.com/productimages/product/p436489-av-01-zoom.jpg" class="imagem"></img>
        <br></br>
        <h3 class="perfume-h3">Lost Cherry</h3>
        <p class="perfume-p">R$3.690,00</p>
        <p class="perfume-p">Marca: Tom Ford</p>
        <p class="perfume-p">Notas: Cereja negra, Amendoa amarga, Rosa absoluta, Tonka Torrada.</p>
        </div>
            




        </div>

        

    );
}

