<template>
  <section class="ph3 pv5">
    <h1 class="ttu">
      Users
    </h1>
    <div class="cf">
      <div v-for="(user, index) in users" class="w-100 w-50-m w-33-l fl ">
        <nuxt-link :to="`/users/${index}`" class="link db br3 pa3 pa4-ns ma3-ns mb4 ba b--black-10">
          <div class="tc">
            <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
            <h1 class="f4">{{ user.name }}</h1>
            <hr class="mw3 bb bw1 b--black-10">
          </div>
          <p class="lh-copy measure center f6 black-70">
            Quite affectionate and outgoing.
            She loves to get chin scratches and will
            roll around on the floor waiting for you give her more of them.
          </p>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      users: []
    };
  },
  async asyncData({ app }) {
    const { data } = await app.$axios.get('/users');
    return { users: data };
  },
  head() {
    return {
      title: 'Users'
    };
  }
};
</script>

<style scoped>

</style>
