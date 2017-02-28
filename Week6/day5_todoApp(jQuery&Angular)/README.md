# TO-DO App using an API

Create a server that "serves" a client (under the `public` folder) that: 

- interacts with this server by using the different endopoints
- manage the creation, update, removal of tasks
- show different list tasks (done & pending tasks)

Feel free to use your own design and client app routes 

## Start server

To start the server you can just do

```
npm start
```

This will server static files under `public` folder and will listen to several endopoint to allow clients interact w/ the data

You can see the current status of your data all the time at `data/db.json`

## Actions available

All these endpoints will start locally w/ `http://localhost:3000` 

Example: `http://localhost:3000/api/Todos`

### GET endpoints

```
curl http://localhost:3000/api/Todos
```

#### [GET] `api/Todos`

Get List ALL tasks

#### [GET] `api/Todos/:id` 

Get specific taks per id

#### [GET] `api/Todos?done=true` 

Get done tasks

#### [GET] `api/Todos?done=false` 

Get pending tasks

### POST endpoints

```
curl --data "todo=buy cars" http://localhost:3000/api/Todos
```

#### [POST] `api/Todos` (http://localhost:3000/api/Todos)

To add a task. It only need a `todo` value. The rest of the values (`done`, `createdAt`, `id`) will be added automatically

### PUT endpoints

```
curl -X "PUT" --data "done=true&todo=buy Books&createdAt=1487840371425" http://localhost:3000/api/Todos/4
```

#### [PUT] `api/Todos/:id` 

To update a task. It needs to receive the following values: `done`, `todo`, `createdAt` (even if not all are being updated). The rest value `modifiedAt` will be added automatically

### DELETE endpoints

```
curl -X "DELETE" http://localhost:3000/api/Todos/4
```

#### [DELETE] `api/Todos/:id` 

To remove a task. Only by passing an id the task will be removed.

