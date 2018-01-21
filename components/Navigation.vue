<template>
  <nav class="ph3 pv4 bb b--black-10">
    <nuxt-link to="/" class="link dim black b f5 dib mr3" title="Home">Company</nuxt-link>
    <nuxt-link to="/users" class="link dim mid-gray f5 dib mr3" title="Home">Users</nuxt-link>
    <nuxt-link to="/about" class="link dim mid-gray f5 dib mr3" title="About">About</nuxt-link>
    <nuxt-link to="/contact" class="link dim mid-gray f5 dib" title="Contact">Contact</nuxt-link>
    <button @click="openSidebar()" class="btn-reset mid-gray f1 dib fr sidebar-toggle" type="button"></button>
  </nav>
</template>

<script>
export default {
  methods: {
    openSidebar() {
      this.$store.dispatch('openMenu');
    }
  }
};
</script>

<style scoped>
.sidebar-toggle {
  margin-top: -25px;
  outline: none;
  border: none;
  background: transparent;
}
.sidebar-toggle:before {
  content: '\2261';
}
.sidebar-toggle:hover {
  cursor: pointer;
}
</style>
