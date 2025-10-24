# Sistema de Gestão de Estoque - EasyEstoque

![Angular](https://img.shields.io/badge/Angular-v17-red?logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-v20-green?logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v15-blue?logo=postgresql&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 1. Descrição do Projeto
Sistema web para gestão de estoque de uma fabricante de ferramentas manuais.  
Permite:
- Cadastrar produtos e suas variações (material, tamanho, peso)  
- Registrar entradas e saídas de estoque  
- Emitir alertas automáticos quando o estoque estiver abaixo do mínimo  
- Manter histórico completo de movimentações com rastreabilidade do usuário responsável  

---

## 2. Tecnologias Utilizadas
- **Frontend:** Angular (TypeScript, HTML, CSS/Tailwind)  
- **Backend:** Node.js (Express ou NestJS)  
- **Banco de Dados:** PostgreSQL  
- **Autenticação:** JWT (JSON Web Token)  
- **Sistema Operacional:** Windows 11  

---

## 3. Funcionalidades

### 3.1 Autenticação
- Login com email e senha  
- Logout funcional  
- Validação de campos obrigatórios  
- Mensagem de erro em caso de credenciais inválidas  

### 3.2 Painel Principal
- Exibe o nome do usuário logado  
- Acesso às telas de Cadastro de Produto e Gestão de Estoque  
- Botão de logout funcional  

### 3.3 Cadastro de Produto
- Listagem de produtos em tabela  
- Busca por nome ou categoria  
- Cadastro de novos produtos  
- Edição de produtos existentes  
- Exclusão de produtos  
- Validação de campos obrigatórios  
- Botão para retornar à tela principal  

### 3.4 Gestão de Estoque
- Listagem de produtos em ordem alfabética  
- Seleção de produto para movimentação  
- Registro de entrada ou saída de estoque com data  
- Atualização automática da quantidade  
- Alertas automáticos para estoque abaixo do mínimo  
- Registro de histórico de movimentações  

### 3.5 Histórico de Movimentações
- Visualização completa das movimentações (produto, variação, tipo, quantidade, data, usuário)  
- Exportação em CSV ou JSON  

---

## 4. Modelo de Dados (DER)

```mermaid
erDiagram
    USUARIO {
        int id PK
        string nome
        string email
        string senha
    }

    PRODUTO {
        int id PK
        string nome
        string categoria
        int estoque_minimo
    }

    VARIACAO_PRODUTO {
        int id PK
        int produto_id FK
        string material
        string tamanho
        float peso
        int quantidade
    }

    MOVIMENTACAO_ESTOQUE {
        int id PK
        int variacao_id FK
        string tipo
        int quantidade
        date data
        int usuario_id FK
    }

    USUARIO ||--o{ MOVIMENTACAO_ESTOQUE : "registra"
    PRODUTO ||--o{ VARIACAO_PRODUTO : "possui"
    VARIACAO_PRODUTO ||--o{ MOVIMENTACAO_ESTOQUE : "gera"


/////////////////////////////////////////////////////////////////////////

