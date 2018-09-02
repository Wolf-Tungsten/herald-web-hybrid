<template lang="pug">

    .dashboard-item(:class='{ stale: isStale }' ondragstart='return false' @click="pushRoute()")
      .name {{ name }}
      .value {{ value != null ? value : '···' }}

</template>
<script>

  export default {
    props: ['name', 'value', 'isStale', 'route', 'title'],
    data() {
      return {}
    },

    methods:{
      pushRoute() {

        if(window.webkit){
          window.webkit.messageHandlers.pushRoute.postMessage({"route": this.route, "title": this.title})
        }
        else if (android) {
          android.pushRoute(this.route, this.title)
        }
      }
    }
  }

</script>
<style lang="stylus">

  .dashboard-item
    display: flex
    flex-direction: column
    align-items: center
    cursor: pointer

    > * + *
      margin-top: 5px

    .name
      font-size 14px
      color var(--color-text-secondary)

    .value
      font-size 18px
      color var(--color-primary)

</style>
