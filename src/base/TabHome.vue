<template lang='pug'>
  .tab
    dashboard(:user='user')
    .todo
      exam(v-if='/^21/.test(user.cardnum)')
      curriculum
      experiment(v-if='/^21/.test(user.cardnum)')
</template>

<script>
  import exam from '@/components/Exam.vue'
  import login from '@/components/Login.vue'
  import dashboard from '@/components/Dashboard.vue'
  import curriculum from '@/components/Curriculum.vue'
  import experiment from '@/components/Experiment.vue'
  import api from '@/api'

  export default {
    components: {
      login, dashboard, curriculum, experiment, exam
    },
    data () {
      return {
        user:{}
      }
    },
    async created () {
        let that = this
        this.user = await api.get('/api/user')
        this.user.admin = await api.get('/api/admin/admin')
    },
    methods: {
    }
  }
</script>