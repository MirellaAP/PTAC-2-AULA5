import { useState } from "react";
import { Link } from "react-router-dom";


export default function ToDo() {
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);
    const [id, setId] = useState(1);
    const [preco, setPreco] = useState(0)
    const [notas, setNotas] = useState("")
    

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            preco: preco,
            notas: notas,
            id: id
        }]);
        setId(id + 1);
        setAtividade("");
        setPreco(0);
        setNotas("");
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
            <Link to="/">home</Link>
            <h1>Lista de Atividades</h1>
            <form onSubmit={salvar}>
                <input type="text"
                    value={atividade}
                    onChange={(e) => { setAtividade(e.target.value) }} />
                    <input type="number"
                    value={preco}
                    onChange={(e) => { setPreco(e.target.value) }} />
                      <input type="text"
                    value={notas}
                    onChange={(e) => { setNotas(e.target.value) }} />
                <button>ADICIONAR</button>
            </form>
            {lista.map((ativ) =>
                <ul key={ativ.id}>
                    <li>
                        <p>{ativ.atividade}</p>
                        <p>{ativ.preco}</p>
                        <p>{ativ.notas}</p>
                        <button onClick={() => remover(ativ.id)}>Remover</button>
                    </li>
                </ul>
            )}
        </div>
    );
}