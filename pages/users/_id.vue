<template>
  <section class="ph3 pv5">
    <h1 class="title">
      User
    </h1>
    <h2 class="info">
      {{ user.name }}
    </h2>
    <nuxt-link class="button" to="/users">
      Users
    </nuxt-link>
  </section>
</template>
<script>
export default {
  name: 'id',
  data() {
    return {
      user: {}
    };
  },
  async asyncData(context) {
    try {
      const { data } = await context.app.$axios.get(
        '/users/' + context.params.id
      );
      return { user: data };
    } catch (e) {
      context.error({
        statusCode: e.response.status,
        message: e.response.data
      });
    }
  },
  head() {
    return {
      title: `User: ${this.user.name}`
    };
  }
};
</script>

<style scoped>
.title {
  margin-top: 30px;
}
.info {
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button {
  margin-top: 30px;
}
</style>
