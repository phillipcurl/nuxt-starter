<template>
  <div>
    <aside class="bg-white br b--black-10 sidebar"
           :style="sidebarStyles"
           :class="{'sidebar--is-open': isOpen}">
      <sidebar-header v-if="showHeader"
                      :title="title"
                      @close="$emit('close')"/>
      <div class="sidebar-content">
        <slot/>
      </div>
    </aside>
    <sidebar-overlay v-if="showOverlay" 
                     :is-visible="isOpen"
                     :animation-timing="animationTiming"
                     :opacity="overlayOpacity"
                     @close="$emit('close')"/>
  </div>
</template>

<script>
import SidebarHeader from './SidebarHeader';
import SidebarOverlay from './SidebarOverlay';

export default {
  props: {
    title: {
      type: String,
      default: 'Sidebar'
    },
    position: {
      type: String,
      default: 'left'
    },
    width: {
      type: String,
      default: '300px'
    },
    animationTiming: {
      type: String,
      default: '0.2s'
    },
    overlayOpacity: {
      type: Number,
      default: 0.7
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showOverlay: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    sidebarStyles: function() {
      const stylesObj = {
        width: this.width,
        transition: `transform ${this.animationTiming} ease`
      };
      const positionObj =
        this.position === 'right' ? { right: 0 } : { left: 0 };
      const transformObj =
        this.position === 'right'
          ? { transform: `translateX(${this.width})` }
          : { transform: `translateX(-${this.width})` };

      return Object.assign(stylesObj, positionObj, transformObj);
    }
  },
  components: {
    SidebarHeader,
    SidebarOverlay
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  height: 100%;
  z-index: 1000;

  &--is-open {
    transform: translateX(0) !important;
  }

  &-content {
    margin-top: 61px;
    height: calc(100vh - 61px);
    overflow-y: auto;
  }
}
</style>
