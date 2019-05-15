# Todos GERU

## tools + patterns

- react
- react-redux
  - State manager
- deox
  - Used to decrease redux boilerplate
- reselect
  - Use to meoize state, so that it won't be recalculated every time and use a cached state instead
- reactstrap
  - Component's style
- atomic design
  - Pattern to split presentacional components that aren't connected to the store. Please have a
  look in components folder to have a better understanding of its usage.
- json-server
  - local api 
 
## Features

- Criar + Editar + Excluir Tarefa
- Filtro por:
  - dia, semana e mês
  - tarefas completas e a fazer
  - paginação
  - descrição
- Api local usando json-server
 
## installation

```
$ npm install
```

## usage

When you start the application, it will start the frontend + json-server api

```
$ npm start
```
