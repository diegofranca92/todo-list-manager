Qualquer dúvida ao cliente você pode enviar para srvibbraneo@gmail.com


### Checklist final
Fizemos uma checklist para você conferir se sua entrega está completa. Confira antes de realizar sua finalização e entregar o seu teste :)
- [x] **Avaliação do escopo** - Já avaliei o escopo (tirei as dúvidas com cliente ou equipe técnica, ou não tive dúvidas).
- [x] **Estimativa em horas** - Fiz uma estimativa em HORAS do desenvolvimento de TODO o projeto.
      Total de horas: 22 horas
      Total de dias: entre 4 e 5 dias

      Avaliação de Escopo, planejamento de execução e estimativa de horas - 2 horas
      Tela inicial - 2 horas
      Criar TODO - 6 horas
      Editar TO DO - 10 horas
      Excluir TO DO - 1 hora
      Compartilhar TO DO - 1 hora
- [x] **Estimativa em dias** - Também fiz uma estimativa em DIAS do prazo de entrega.
    - entre 4 e 5 dias
- [ ] **Apontamento das horas trabalhadas** - Já realizei o apontamento das minhas horas trabalhadas.
- [ ] **Atividades desenvolvidas e funcionais** - Realizei pelo menos 3 das atividades desenvolvidas e funcionais, com código no repositório gitlab fornecido;
- [ ] **Atividade seguindo as considerações** - As atividades foram realizadas levando em consideração as estruturas da API dispostas no link
- [ ] **Organização das informações** - Organizei todas as informações no Read.me do repositório.
- [ ] **Link testável ou link do vídeo** - Gerei um link testável da minha execução ou gravei um vídeo simples.


# Detalhamento do projeto

### Público Alvo
Trata-se de um projeto interno onde qualquer funcionário da empresa do Sr. Vibbraneo, que gostaria de ter uma lista de itens com sub-listas em um endereço público, que possa ser compartilhado por e-mail para um ou mais usuários e estes, quando receberem o link, possam colaborar.

### Backend de armazenamento de dados

A equipe do Sr. Vibbraneo produziu toda a estrutura de gravação das informações, porém ainda esta em um ambiente interno da empresa, para isso eles disponibilizaram um JSON com exemplos de dados para que você possa trabalhar as chamadas REST´s da API para inclusão, alteração, exclusão e consulta de dados, veja os detalhes no [link](https://drive.google.com/open?id=1V_ED-JbQFj6f8myfhQNEtLgGwbsuOOGaMF25DRGoH-M).

### Ambiente de simulação

Como a API esta disponível apenas no ambiente interno da empresa do Sr. Vibbraneo, você deve simular as chamadas de acordo com as orientações do [link](https://drive.google.com/open?id=1V_ED-JbQFj6f8myfhQNEtLgGwbsuOOGaMF25DRGoH-M) e tratar os retornos especificados.

### Tela inicial
- Deve ser acessada na URL base do site (raiz) e conter explicações de como criar um nova lista, editar uma já existente e excluir
- O menu deve conter os seguintes itens:
  - Sobre: explicar o que faz a ferramenta ToDo List

### Criar TO DO
Ao entrar com uma URL qualquer, a mesma deve ser usada para se referenciar a um novo ToDo List
Após a criação, o usuário deve ser enviado a tela de edição da ToDo

### Editar TO DO
- Utilizando uma URL já associada a um ToDo, o usuário poderá realizar as seguintes operações em uma lista de itens de texto:
  - Criar um novo item
  - Editar um item existente
  - Apagar um item existente
  - Organizar o item como sub-item de um item existente
  - Mover um sub-item para fora do item pai, transformando-o em um outro item pai ou um sub-item de outro item;

### Excluir TO DO
Como usuário posso excluir um ToDo que seja meu


### Compartilhar TO DO
Como usuário gostaria de compartilhar a URL do ToDo que estou editando por email para uma ou mais pessoas


**------------------------DUVIDAS------------------------------**

### Criar TO DO
"_Ao entrar com uma URL qualquer, a mesma deve ser usada para se referenciar a um novo ToDo List_"
 - Duvida, Entrar com a URL onde ? Num input ao cadastrar ? Ou no navegador ? Ficou confuso esse requisito

 ### Excluir TO DO
"_Como usuário posso excluir um ToDo que seja meu_"
- Precisa identificar o usuário ? No caso teria algo de autenticação do usuário pra identificar o TODO list por usuário ?