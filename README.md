Esta API permite gerenciar uma lista de cursos. Ela oferece as seguintes funcionalidades:

1. **Listar todos os cursos**: Você pode obter uma lista de todos os cursos existentes enviando uma solicitação GET para `/cursos`. A resposta será um objeto JSON contendo todos os cursos disponíveis.

2. **Encontrar um curso pelo índice**: Você pode encontrar um curso específico pelo seu índice na lista enviando uma solicitação GET para `/cursos/:index`, onde `:index` é o índice do curso desejado. O servidor verifica se o índice é válido e retorna o curso correspondente como um objeto JSON.

3. **Criar um novo curso**: Para adicionar um novo curso à lista, você precisa enviar uma solicitação POST para `/cursos`, fornecendo o nome do curso no corpo da solicitação. O servidor verifica se o nome do curso foi fornecido e o adiciona à lista de cursos existentes.

4. **Atualizar um curso pelo índice**: Para atualizar um curso existente, você envia uma solicitação PUT para `/cursos/:index`, fornecendo o índice do curso a ser atualizado e o novo nome do curso no corpo da solicitação. O servidor verifica se o índice é válido e atualiza o nome do curso na lista.

5. **Deletar um curso pelo índice**: Para remover um curso da lista, você envia uma solicitação DELETE para `/cursos/:index`, onde `:index` é o índice do curso a ser excluído. O servidor verifica se o índice é válido e remove o curso da lista.

Além disso, a API também possui dois middlewares:

- Um middleware global que registra a URL chamada para cada requisição feita ao servidor.
- Um middleware chamado `checkCurso` usado para verificar se o nome do curso é fornecido nas rotas que requerem essa informação.
- Um middleware chamado `checkIndexCurso` usado para verificar se o índice fornecido nas rotas que requerem um índice de curso é válido.

Essa API é uma aplicação básica de gerenciamento de cursos, permitindo a criação, leitura, atualização e exclusão (CRUD) dos cursos na lista.

## Tecnologias Utilizadas

- ![Node.js](https://img.icons8.com/color/48/000000/nodejs.png)
- ![Express.js](https://img.icons8.com/color/48/000000/express.png)
- ![JavaScript](https://img.icons8.com/color/48/000000/javascript.png)


