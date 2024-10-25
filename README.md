# Task Dashboard

para instalar o scss:

npm install -g sass

para compilar: 

sass scss/main.scss css/main.css --watch

Estou desenvolvendo um projeto chamado **Task Dashboard**, que é uma aplicação simples para gerenciar tarefas. A ideia é criar um painel de controle onde eu possa adicionar novas tarefas, marcar como completas e removê-las. É um projeto menor, mas estou aproveitando para praticar o uso do SCSS, organizando os estilos de forma modular e aplicando boas práticas de programação.

Dividi a estrutura em várias pastas, como `base`, `components`, `layout` e `utils`, para deixar o código mais organizado e fácil de manter. Cada pasta tem arquivos específicos, como `_reset.scss` para resetar estilos básicos, `_task.scss` para os estilos dos itens de tarefa, e `_button.scss` para os botões. Também estou usando um arquivo de variáveis (`_variables.scss`) para centralizar as cores e tamanhos, o que facilita bastante se eu quiser mudar a aparência do projeto mais tarde.

Para compilar o SCSS, estou usando o Sass, que transforma o `main.scss` em um arquivo `main.css` que é incluído no HTML. Isso me permite usar funcionalidades avançadas do SCSS, como variáveis e mixins, e ver o resultado direto na página.

Além de praticar o SCSS, estou aproveitando para melhorar minhas habilidades com JavaScript, criando a lógica para adicionar tarefas dinamicamente e manipular o DOM. É um projeto pequeno, mas com um pouco de tudo que eu gosto: programação front-end, design e organização de código. Está sendo uma ótima maneira de aprender na prática e ver o progresso acontecendo.