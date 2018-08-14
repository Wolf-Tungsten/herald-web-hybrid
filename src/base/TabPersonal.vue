<template lang='pug'>
  #personal
    .personal-info
      .info-container
        .name {{ user ? user.name : '加载中' }}
        //.identity {{ user ? user.identity : '…' }}
        .identity 东南大学{{ user ? user.identity: '...'}}
      .operator-container
        .operator(@click='update()')
          .red-dot(v-if='needUpdate')
          .text 检查更新
          img.icon(:src='downloadImg')
        .divider
        .operator(@click='logout()' )
          .text 退出登陆
          img.icon(:src='logoutImg')
    
    .applet-container
      .applet(@click='pushRoute("/intro", "新生指引")')
        img.icon(:src='appletIntroImg')
        .text 新生指引
        img.go-icon(:src='goImg')
      
      .applet(@click='pushRoute("/course-stat", "课表预测")')
        img.icon(:src='appletCourseStatImg')
        .text 课表预测
        img.go-icon(:src='goImg')
      
      .applet.end(@click='pushRoute("/laundry", "洗衣房")')
        img.icon(:src='appletLaundryImg')
        .text 洗衣房查询
        img.go-icon(:src='goImg')

  

    
</template>

<script>
  import api from '@/api'
  import logoutImg from 'static/images/logout.png'
  import downloadImg from 'static/images/download.png'
  import goImg from 'static/images/go.png'

  import appletIntroImg from 'static/images/applet-intro.png'
  import appletLaundryImg from 'static/images/applet-laundry.png'
  import appletCourseStatImg from 'static/images/applet-course-stat.png'
import { anyTypeAnnotation } from 'babel-types';

  export default {
    props:['user'],
    components: {

    },
    data () {
      return {
        downloadImg,
        goImg,
        logoutImg,
        appletIntroImg,
        appletLaundryImg,
        appletCourseStatImg,
        versionInfo:{},
        needUpdate:false
      }
    },
    methods: {
      pushRoute(route, title) {
        if (android) {
          android.pushRoute(route, title)
        }
      },
      logout() {
        if (android) {
          android.authFail()
        }
      },
      async update() {
        console.log(this.versionInfo)
        if(!android.getVersionCode()) {
          // Alpha版本
          android.toast('发现App新版本')
          android.openURLinBrowser(this.versionInfo.androidApk)
        }
        this.versionInfo = await api.get('/api/version')
        if (android.getVersionCode() < parseInt(this.versionInfo['android'])) {
          android.toast('发现App新版本')
          android.openURLinBrowser(this.versionInfo.androidApk)
        } else if (window.versionCode < parseInt(this.versionInfo['hybrid-kernel'])) {
          android.toast('稍等一下，小猴马上回来！')
          android.clearCache()
        } else {
          android.toast('已经是最新版本了～')
        }
        
      }
    },
    async created() {
      this.versionInfo = await api.get('/api/version')
      if (window.versionCode < parseInt(this.versionInfo['hybrid-kernel'])) {
        this.needUpdate = true
      }
      if (android.getVersionCode() < parseInt(this.versionInfo['android'])) {
        this.needUpdate = true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #personal
    display flex
    flex-direction column
    align-items stretch

    .personal-info
      padding 20px 15px
    .info-container
      padding 0 0 15px
      margin 0 10px
      display flex
      flex-direction row
      align-items: center

      * + *
        margin-left 10px

      .name
        font-size 17px
        flex 0 0 auto
        white-space: nowrap
        color var(--color-text-regular)

      .identity
        font-size 12px
        flex 1 1 0
        white-space: nowrap
        color var(--color-text-secondary)

        a
          margin-left 5px

      .icon
        width 20px
        height 20px
        cursor pointer

    .operator-container
      width 100%
      display: flex
      align-items center
      padding-top 15px
      border-top 0.5px solid var(--color-divider)
      
    
    .operator
      flex-grow 1
      display flex
      align-items center
      justify-content center
      
      .red-dot
        width 10px
        height 10px
        border-radius 10px
        background-color #ff6666
        margin-right 5px
      .text
        color var(--color-text-bold)
      .icon
        width 15px
        height 15px
        margin-left 5px
    
    .divider
      width 1px
      height 20px
      background-color var(--color-divider)

    .applet-container
      border-top solid 10px #f0f0f0
      display flex
      flex-direction column
      align-items stretch

      .applet
        padding 10px 15px
        border-bottom solid 1px var(--color-divider)
        display flex
        align-items center
        .text
          padding-left  10px
          flex-grow 1
        .icon
          width 25px
          height 25px
        .go-icon
          width 15px
          height 15px
      .end
        border-bottom none
      
      .applet:active
        background-color var(--color-divider)



    
</style>