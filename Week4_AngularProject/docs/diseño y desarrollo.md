### Nav de navegacion

**ADVERTENCIA**
La barra de navegación responsive requiere el uso del plugin collapse de JavaScript incluido en Bootstrap 3.
**TRUCO**
Para mejorar la accesibilidad de tus sitios y aplicaciones, no olvides añadir el atributo role="navigation" a todas las barras de navegación.

Aplica la clase **.navbar-fixed-top** a la barra de navegación para fijarla en la parte superior de la página
Aplica la clase **.navbar-fixed-bottom** a la barra de navegación para fijarla en la parte inferior de la página.


**Paginadores**: http://librosweb.es/libro/bootstrap_3/capitulo_6/paginadores.html

**Jumbotron**:

Se trata de un componente para mostrar contenidos de forma muy destacada. Si no lo encierras dentro de un elemento .container, ocupa toda la anchura del dispositivo. Si lo encierras dentro de un .container, solamente ocupará la anchura del contenedor y mostrará esquinas redondeadas. Ejemplo:

```html
<div class="jumbotron">
  <div class="container">
    <h1>Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p><a class="btn btn-primary btn-lg" role="button">Leer más</a></p>
  </div>
</div>
```

**imágenes:**

```html
<img src="..." class="img-responsive" alt="Imagen responsive">
<img src="..." alt="..." class="img-rounded">
<img src="..." alt="..." class="img-circle">
<img src="..." alt="..." class="img-thumbnail">
```

**Centrando los contenidos de la página**
```html
Si quieres centrar una página respecto a la ventana del navegador, encierra sus contenidos dentro de un elemento y aplícale la clase .container:

<div class="container">
  ...
</div>
```

**Márgenes:**
NOTA
Si quieres crear un diseño totalmente fluido que ocupe toda la anchura del navegador, deberías encerrar las rejillas dentro de un elemento al que apliques los estilos padding: 0 15px;. De esta forma se pueden neutralizar los márgenes margin: 0 -15px; que se aplican a los elementos .row.

###GRID

**Ejemplo de rejilla muy bueno:**
```html
<div class="row">
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
</div>
<div class="row">
  <div class="col-md-8">.col-md-8</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
  <div class="col-md-6">.col-md-6</div>
  <div class="col-md-6">.col-md-6</div>
</div>
```
[Ver este ejemplo en una nueva página] (http://librosweb.es/ejemplos/bootstrap_3/ejemplo-2-1.html)

**problemas cuando las columnas tengan diferente altura**. Para solucionarlo, utiliza la clase .clearfix combinándola con alguna de las clases auxiliares tipo .visible-xs:  
```html
<div class="clearfix visible-xs"></div>
```

**resetear los desplazamientos de las columnas** (sólo en dispositivos medianos y grandes)
```html
<div class="col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0"></div>
```

**Reordenando las columnas**

Bootstrap 3 introduce la posibilidad de reordenar las columnas para cambiar su posición, lo que es muy importante para los diseños web responsive. Añade las clases .col-md-push-* y .col-md-pull-* para reordenar las columnas.
```html
<div class="row">
  <div class="col-md-9 col-md-push-3">.col-md-9 .col-md-push-3</div>
  <div class="col-md-3 col-md-pull-9">.col-md-3 .col-md-pull-9</div>
</div>
```
[Ver este ejemplo en una nueva página](http://librosweb.es/ejemplos/bootstrap_3/ejemplo-2-6.html)

###TIPOGRAFIA

**texto poco importante**
Para marcar una parte del texto o todo un bloque de texto como poco importante, utiliza la etiqueta <small>. 

**Clases CSS para indicar el tipo de contenido**

Aunque no es una práctica recomendada desde el punto de vista de la accesibilidad, Bootstrap 3 también define varias clases CSS para mostrar el tipo de contenido a través del color del texto.

Ejemplo:
```html
<p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
<p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
<p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
<p class="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
```

**Abreviaturas básicas**

Incluye la definición completa del elemento <abbr> dentro de su atributo title. Ejemplo:
```html
<p>Este texto contiene abreviaturas como <abbr title="señor">Sr.</abbr> y <abbr title="señora">Sra.</abbr></p>
```

**Iniciales**

Añade la clase .initialism (iniciales en inglés) a un elemento <abbr> para reducir ligeramente su tamaño de letra y así hacer que el texto se lea mejor. Ejemplo:
```html
<p>Esta página está escrita con <abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
```

**ESTRELLAS**
.glyphicon .glyphicon-star


npm bower install -g --> ambito global

bower init

bower install

bower install boootstrap--save

touch.gitignore --> no subir archivos que no interesen