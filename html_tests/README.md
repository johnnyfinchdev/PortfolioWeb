Los usuarios tendrán la posibilidad de tener una especie de perfil personalizable (con css) parecido a [linktree](https://linktr.ee/), pero más orientado a los desarrolladores de aplicaciones

Aparecerá su nombre, su foto de perfil, una breve descripción, sus redes sociales, sus últimos proyectos y un QR para compartirlo

La tarjeta de perfil debe de usar [atropos](https://atroposjs.com/) una librería que le da un toque muy bonito y chulo a las tarjetas.



# Atropos
Al aplicarle el componente la interactividad se pierde, por loq ue se lo he aplicado solo a la imagen y a la descripcion.

No está disponible en navegadores antiguos, pero da igual por que si no funciona en ese navegador 
el usuario no va a ver nada raro, no se vería el efecto, pero no pasa nada.

Para aplicar atrops hay que meteter código obligatorio (en HTML) para emcapsular lo que se quiere mostrar.

``` HTML
<!-- main Atropos container (required), add your custom class here -->
<div class="atropos my-atropos">
  <!-- scale container (required) -->
  <div class="atropos-scale">
    <!-- rotate container (required) -->
    <div class="atropos-rotate">
      <!-- inner container (required) -->
      <div class="atropos-inner">
        <!-- put your custom content here -->
      </div>
    </div>
  </div>
</div>  
```
Para Svelte y Vite. Comparten la misma documentación `Atropos Element Documentation`

Ejemplo:
```html
<script>
  // import Atropos component
  import AtroposComponent from 'atropos/element';
  // register Atropos component
  customElements.define('atropos-component', AtroposComponent);
</script>
<atropos-component class="my-atropos">
    <!-- ... -->
</atropos-component>
```

