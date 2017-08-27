<template>
  <div>
    <!-- Page Layout here -->
    <div class="row">
      <nav>
        <div class="nav-wrapper">
          <a href="#" v-bind:class="logoDirection" class="brand-logo">Logo</a>
          <ul id="nav-mobile" v-bind:class="ulDirection" class="hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>

      <aside class="col s12 m4 l3 teal lighten-2">
        asdasd
        <button @click="clickHandler">button</button>
      </aside>

      <section class="col s12 m8 l9">

      </section>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'MdiMain',
    data () {
      return {
        direction: 'right'
      }
    },
    computed: {
      ulDirection: function () {
        return (this.direction === 'right') ? 'left' : 'right'
      },
      logoDirection: function () {
        return (this.direction !== 'right') ? 'left' : 'right'
      }
    },
    methods: {
      clickHandler: function () {
        this.direction = (this.direction === 'right') ? 'left' : 'right'
      }
    }
  }
</script>

<style scoped>

</style>
