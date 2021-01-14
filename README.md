# MG-Project

URL APP: https://mg-proyect-7d0bb.web.app

Esta aplicación cuenta con un login mediante correo electrónico, facebook y google y registro mediante correo electrónico.
Además de esto, consume una api para mostrarle al usuario los diferentes datos que proporciona.
[API](https://rapidapi.com/apilayernet/api/rest-countries-v1/endpoints)


## Versiones de herramientas utilizadas:

- NodeJS: v14.10.0
- NPM: 6.14.8
- Angular CLI: 11.0.6
- Angular: 11.0.8
- Firebase-tools: 9.1.2

## Uso de la aplicación:
1. Dirigirse a la carpeta raíz de la aplicación.
2. Ejecutar el siguiente comando (solo la primera vez):
```
npm install
```
3. Correr la aplicación:
```
ng serve -o
```

## Deploy de la aplicación:
1. Compilar la aplicación:
```
ng build
```

2. Copiar los archivos generados en dist en la carpeta public de firebase
3. Dirigirse a la raiz donde se configuro firebase y ejecutar el siguiete comando:
```
firebase deploy
```