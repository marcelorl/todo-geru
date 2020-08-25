# Todo GERU

## tools + patterns

- react
- typescript
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
- workbox
  - service worker handling
  - Background notifications
  - Offline usage
- formik
  - Forms handling
- firebase
  - Notification
- heroku scheduler
  - every 10 minutes all messages are verified and send a push notification if necessary
 
## Features

- Criar + Editar + Excluir Tarefa
- Filtro por:
  - dia, semana e mês
  - tarefas completas e a fazer
  - paginação
  - descrição
- Api local usando json-server
- Notificação
 
## installation

```
$ yarn
```

## development

```
$ yarn dev
```

## prod

When you start the application, it will start the frontend + json-server api

```
$ yarn start
```

## deployment

Whenever I git push to master my changes are deployed to the heroku's repository website 
[https://todo-geru.herokuapp.com/](https://todo-geru.herokuapp.com/)

## Work board

I'm using a kanban board from github to manage the remaining tasks to complete the challenge, have
look at: [https://github.com/marcelorl/todo-geru/projects/2](https://github.com/marcelorl/todo-geru/projects/2)
