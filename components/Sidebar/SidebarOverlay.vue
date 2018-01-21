<template>
  <div @click="$emit('close')" 
       class="sidebar-overlay" 
       :style="overlayStyles"
       :class="{'sidebar-overlay--is-visible': isVisible}">
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    animationTiming: {
      type: String,
      required: true
    },
    opacity: {
      type: Number,
      required: true
    }
  },
  computed: {
    overlayStyles: function() {
      return {
        backgroundColor: `rgba(0, 0, 0, ${this.opacity})`,
        transition: `opacity ${this.animationTiming} ease, visibility ${this
          .animationTiming} ease`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  visibility: hidden;
  opacity: 0;

  &--is-visible {
    visibility: visible;
    opacity: 1;
  }
}
</style>
