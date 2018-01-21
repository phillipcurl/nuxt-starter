<template>
  <header class="fixed cf bb b--black-10 lh-copy sidebar-header">
    <h3 class="fl dib mv0 pa3 green">
      {{title}}
    </h3>
    <button @click="$emit('close')" 
            class="fr dib button-reset f3 sidebar-toggle-btn pa3 ma0" 
            type="button">
      &times;
    </button>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    required: true
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  &-header {
    top: 0;
    left: 0;
    width: 100%;
  }
  &-toggle-btn {
    outline: none;
    border: none;
    background: transparent;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
