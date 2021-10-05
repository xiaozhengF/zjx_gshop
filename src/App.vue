<template>
 <div>
   <router-view></router-view>
   <FootGuide v-show="$route.meta.showFoot" />
 </div>
</template>

<script>
import FootGuide from './components/FooterGuide/FooterGuide.vue'
export default {
 data () {
  return {
  };
 },

  components: {FootGuide},

  computed: {},

  mounted () {},

 methods: {},
}

</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>