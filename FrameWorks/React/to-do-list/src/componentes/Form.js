//componente para criar formulário para inserir uma nova
//função para adicionar tarefa (arrow function)
import "./Form.css";

import { useState } from "react";

const Form = ({addTarefa}) => {
    
    //vetor para armazenar o valor do imput -> useState
    const [terefa,setTarefa] = useState("");
    //useState => usa memoria local do navegador
    //para armazenar as mudanças de estado
    //primeiro elemento do [] armazenas as tarefas,
    //segundo elemento armazena as mudanças de estado

    //função para atualizar o estado com o valor do imput
    //função vai criar uma nova tarefa ao ser clicado o botão do submit(enviar)
    const handleSubmit = (e) =>{ //arrowFunction
        //impedir o funcionamento padrão do botão submit
        e.prenventDefault(); //não permite o recarregamento da página
        //verificar se o campo não está vazio
        if(terefa.trim() !== ""){
            //adicionar as tarefas ao vetor de tarefas
            addTarefa(terefa);
            //limpo o campo imput
            setTarefa("");

        }
    };
    //lógica por tras do design
    //view
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Inserir Nova Tarefa"
                onChange={(e) => setTarefa(e.target.value)}
            />
            <button className="btnEnviar" type="submi">
                Adicionar
            </button>
        </form>
    )
}

export default Form;
//componente cria o formulário das tarefas
//pode ser reutilizado em outros componentes da aplicação (export)