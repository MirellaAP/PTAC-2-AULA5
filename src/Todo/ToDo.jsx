import { useState } from "react";
import { Link } from "react-router-dom";


export default function ToDo() {
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);
    const [id, setId] = useState(1);
    const [preco, setPreco] = useState(0)
    const [notas, setNotas] = useState("")
    const [marca, setMarca] = useState ("")
    

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            preco: preco,
            notas: notas,
            marca: marca,
            id: id
        }]);
        setId(id + 1);
        setAtividade("");
        setPreco(0);
        setNotas("");
        setMarca("");
    };
    const remover = (id) => {
        /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/
        const auxLista = [];
        lista.map((lista) => {
            if (lista.id !== id) {
                auxLista.push(lista);
            }
        });
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
                <button class = "botão">ADICIONAR</button>
            </form>
            {lista.map((ativ) =>
                <ul key={ativ.id}>
                    <li>
                        
                        <p>{ativ.atividade}</p>
                        <p>{ativ.preco}</p>
                        <p>{ativ.notas}</p>
                        <p>{ativ.marca}</p>
                        <button onClick={() => remover(ativ.id)}>Remover</button>
                    </li>
                </ul>
            )}
        </div>
    );
}