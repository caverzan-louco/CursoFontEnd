# Sistema de Gestão de Manutenção (Formativa)

## Briefing



## Escopo

- Objetivos: 

- Público-Alvo:

- Recursos Tecnológicos:

## Diagramas (Mermaid, Miro, Draw.io)

- Classe

classDiagram
    class Usuario {
        +string id
        +string nome
        +string email
        +string telefone
        +string funcao
        +cadastrar()
        +atualizar()
        +remover()
    }

    class Equipamento {
        +integer id
        +string nome
        +string modelo
        +string numeroDeSerie
        +Date dataAquisicao
        +string status
        +registrar()
        +atualizarStatus()
        +remover()
    }
    class Manutencao {
        +integer id
        +Date data
        +string descricao
        +string tipo
        +float custo
        +registrar()
        +atualizar()
        +finalizar()
    }

    Usuario "1" -- "1+*" Manutencao : "é responsável por"
    Equipamento "1" -- "1+" Manutencao : "associado a"
    Usuario "1" -- "1" Manutencao : "cria"

///////////////////////////////////////////////////////
- Casos de Uso

flowchart TD
   %% Atores
   A1([Técnicos de Manutenção])
   A2([Gestores de Manutenção])
   A3([Administradores do Sistema])

   %% Sistema
   subgraph Sistema de Manutencao
    UC1((Registrar Ordem de Serviço))
    UC2((Atualizar Ordem de Serviço))
    UC3((Planejar Atividades))
    UC4((Delegar Atividades))
    UC5((Supervisionar Manutenção))
    UC6((Gerenciar Usuários))
    UC7((Definir Permissões))
   end

       %% Ligações
    A1 --> UC1
    A1 --> UC2

    A2 --> UC3
    A2 --> UC4
    A2 --> UC5

    A3 --> UC6
    A3 --> UC7
////////////////////////////////////////////////////////
- Fluxo

flowchart TD
    A([Início]) --> B[Gestor planeja atividade de manutenção]
    B --> C[Gestor delega tarefa ao Técnico]
    C --> D[Técnico executa ordem de serviço]
    D --> E{Serviço concluído com sucesso?}
    E -->|Sim| F[Técnico atualiza ordem de serviço]
    E -->|Não| G[Gestor reavalia e redefine a tarefa]
    F --> H[Gestor supervisiona execução]
    H --> I([Administrador registra/ajusta permissões e usuários])
    G --> C
    I --> J([Fim])


## Análise de Risco


## Prototipagem


## Codificação

