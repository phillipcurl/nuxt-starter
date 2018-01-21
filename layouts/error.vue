<template>
  <section class="vh-75">
    <header class="tc ph5 lh-copy">
        <h1 class="f1 f-headline-l code mb3 fw9 dib tracked-tight green">
          {{ error.statusCode }}
        </h1>
        <h2 class="tc f1-l">
          {{ error.message }}
        </h2>
    </header>
    <p class="i tc mt4 mt5-l f4 f3-l">Are you looking for one of these?</p>
    <ul class="list tc pl0 w-100 mt5">
      <li class="dib"><a class="f5 f4-ns link black db pv2 ph3 hover-green" href="/">Home</a></li>
      <li class="dib"><a class="f5 f4-ns link black db pv2 ph3 hover-green" href="/about">About</a></li>
      <li class="dib"><a class="f5 f4-ns link black db pv2 ph3 hover-green" href="/careers">Careers</a></li>
      <li class="dib"><a class="f5 f4-ns link black db pv2 ph3 hover-green" href="/contact">Contact</a></li>
      <li class="dib"><a class="f5 f4-ns link black db pv2 ph3 hover-green" href="/signup">Sign Up</a></li>
      <li class="dib"><a class="f5 f4-ns link black db pv2 ph3 hover-green" href="/help">Help</a></li>
    </ul>
  </section>
</template>
<script>
export default {
  props: ['error']
};
</script>

<style scoped>
.title {
  margin-top: 15px;
  font-size: 5em;
}
.info {
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button {
  margin-top: 50px;
}
</style>
