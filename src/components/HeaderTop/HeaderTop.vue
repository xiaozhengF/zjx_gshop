<template>
        <header class="header">
          <slot name='left'></slot>
          <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
          </span>
          <slot name='right'></slot>
        </header>
</template>

<script>
export default {
props:['title'],
name:'header',
 data () {
  return {
  };
 },

  components: {},

  computed: {},

  mounted () {},

 methods: {},
}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
</style>