import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



export default function ToDo() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState(listaLocalStorage || []);
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
    const [preco, setPreco] = useState(0)
    const [notas, setNotas] = useState("")
    const [marca, setMarca] = useState ("")
    const [imagem, setImagem] = useState ("")
    

    useEffect(() => {
        localStorage.setItem("Lista", JSON.stringify(lista));
      }, [lista]);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            preco: preco,
            notas: notas,
            marca: marca,
            imagem: imagem,
            id: id
        }]);
        setId(id + 1);
        setAtividade("");
        setPreco(0);
        setNotas("");
        setMarca("");
        setImagem("");
    };
   
    const remover = (id) => {
        const auxLista = lista.filter((item) => item.id !== id);
        setLista(auxLista);
      }


    return (
        <div class="container">
            <Link to="/" class = "link">Acessar o Home</Link>
            <h1 class = "titulo">Lista de Perfumes</h1>
            <form onSubmit={salvar}>

                <p class = "nome">Nome</p>
                <input type="text"
                    value={atividade}
                    onChange={(e) => { setAtividade(e.target.value) }} />
                
                    <p class = "nome">Preço</p>
                    <input type="number"
                    value={preco}
                    onChange={(e) => { setPreco(e.target.value) }} />

                    <p class = "nome">Notas</p>
                      <input type="text"
                    value={notas}
                    onChange={(e) => { setNotas(e.target.value) }} />

                    <p class = "nome">Marca</p>
                    <input type="text"
                    value={marca}
                    onChange={(e) => { setMarca(e.target.value) }} />

                    <p class = "nome">Imagem</p>
                    <input type="text"
                    value={imagem}
                    onChange={(e) => { setImagem(e.target.value) }} />
                <button class = "botao">ADICIONAR</button>
            </form>
            {lista.map((ativ) =>
                <ul key={ativ.id}>
                    <li class = "resposta">
                        
                        <p>{ativ.atividade}</p>
                        <p>{ativ.preco}</p>
                        <p>{ativ.notas}</p>
                        <p>{ativ.marca}</p>
                        <img src={ativ.imagem} class = "imagem"></img>
                        <button class = "botao" onClick={() => remover(ativ.id)}>Remover</button>
                    </li>
                </ul>
            )}
        </div>
    );
}