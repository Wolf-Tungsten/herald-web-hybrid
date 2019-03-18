import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Card from '@/pages/Card'
import CardCharge from '@/pages/CardCharge'
import Grade from '@/pages/Grade'
import Lecture from '@/pages/Lecture'
import Srtp from '@/pages/Srtp'
import Library from '@/pages/Library'
import Pe from '@/pages/Pe'
import Intro from '@/pages/Intro'
import Bus from '@/pages/Bus'
import NoticeView from '@/pages/NoticeView'
import ScreenSaver from '@/pages/ScreenSaver'
import CourseStat from '@/pages/CourseStat'
import AdminMonitor from '@/pages/admin/Monitor'
import AdminNotice from '@/pages/admin/Notice'
import AdminPrivilege from '@/pages/admin/Privilege'
import AdminBanner from '@/pages/admin/Banner'
import AdminActivity from '@/pages/admin/Activity'
import Laundry from '@/pages/Laundry'
import Download from '@/pages/Download'
import TabHome from '@/base/TabHome'
import TabDiscover from '@/base/TabDiscover'
import TabNotice from '@/base/TabNotice'
import TabPersonal from '@/base/TabPersonal'
import Curriculum from '@/pages/Curriculum'
import CET from '@/pages/CET'
import Classroom from '@/pages/Classroom'

Vue.use(Router)

// 微信环境下，为隐藏前进后退按钮栏，设置 mode 为 abstract，实现完全不产生浏览器历史
// let isWeixin = /micromessenger/.test(window.navigator.userAgent.toLowerCase()) && window.__wxjs_environment !== 'miniprogram'

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/home-tab',
      name: '首页',
      component: TabHome
    },
    {
      path: '/activity-tab',
      name: '活动',
      component: TabDiscover
    },
    {
      path: '/notification-tab',
      name: '通知',
      component: TabNotice
    },
    {
      path: '/personal-tab',
      name: '个人',
      component: TabPersonal
    },
    {
      path: '/intro',
      name: '新生指引',
      component: Intro
    },
    {
      path: '/card',
      name: '一卡通',
      component: Card
    },
    {
      path: '/card/charge',
      name: '一卡通充值',
      component: CardCharge
    },
    {
      path: '/grade',
      name: '成绩',
      component: Grade
    },
    {
      path: '/lecture',
      name: '人文讲座',
      component: Lecture
    },
    {
      path: '/srtp',
      name: 'SRTP',
      component: Srtp
    },
    {
      path: '/library',
      name: '图书馆',
      component: Library
    },
    {
      path: '/bus',
      name: '校车',
      component: Bus
    },
    {
      path: '/pe',
      name: '跑操及体测',
      component: Pe
    },
    {
      path: '/notice/url/:url',
      name: '通知公告',
      component: NoticeView
    },
    {
      path: '/notice/:nid',
      name: '通知公告',
      component: NoticeView
    },
    {
      path: '/notice/competition/:srtpId',
      name: '通知公告',
      component: NoticeView
    },
    {
      path: '/laundry',
      name: '洗衣房',
      component: Laundry
    },
    {
      path: '/admin/monitor',
      name: '系统概况',
      component: AdminMonitor
    },
    {
      path: '/admin/notice',
      name: '通知公告',
      component: AdminNotice
    },
    {
      path: '/admin/privilege',
      name: '权限管理',
      component: AdminPrivilege
    },
    {
      path: '/admin/banner',
      name: '轮播管理',
      component: AdminBanner
    },
    {
      path: '/admin/activity',
      name: '活动管理',
      component: AdminActivity
    },
    {
      path: '/screensaver',
      name: '屏保',
      component: ScreenSaver
    },
    {
      path: '/course-stat',
      name: '课表预测',
      component: CourseStat
    },
    {
      path: '/download',
      name: '小猴偷米微信 / App',
      component: Download
    },
    {
      path: '/curriculum',
      name: '课表概览',
      component: Curriculum
    },
    {
      path: '/cet',
      name: 'CET 查询',
      component: CET
    },
    {
      path: '/classroom',
      name: '空教室',
      component: Classroom
    },
    {
      path: '*',
      redirect: '/home-tab'
    },
    {
      path: '/',
      redirect: '/home-tab'
    }
  ]
})