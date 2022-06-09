# stay-app-prueba

Prueba técnica dónde se recoge la información de la API https://jsonplaceholder.typicode.com/guide/

##
### Pregunta
***¿Cómo planterías un escenario en el que te hubieras descargado los usuarios pero después la API estuviera offline, para que siguiera funcionando el visionado de usuarios?***

Guardaría la información en la aplicación front end. Por ejemplo usaría un gestor de estados (Vuex) que actuaría como una base local en el front end. También otra alternativa sería usar el propio localStorage del navegador.
Aunque dependería del tipo de información y en qué regularidad se actualiza. 
Por último también notificaría al usuario de que el servicio API está caído.



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
