import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import HomeIndex from '@/components/Home/Index'
import HomePersonal from '@/components/Home/Personal'
import Cmi from '@/components/Cmi/Cmi'
import CmiIndex from '@/components/Cmi/Index'
import CmiInvite from '@/components/Cmi/Invite'
import CmiMission from '@/components/Cmi/Mission'
import CmiRule from '@/components/Cmi/Rule'
import CmiDetail from '@/components/Cmi/Detail'
import CmiTicket from '@/components/Cmi/Ticket'
import CmiMyMember from '@/components/Cmi/MyMember'
import CmiTicketDetail from '@/components/Cmi/TicketDetail'
import CmiGive from '@/components/Cmi/Give'
import CmiGiveSuccess from '@/components/Cmi/GiveSuccess'
import CmiGiveDetail from '@/components/Cmi/GiveDetail'
import CmiWallet from '@/components/Cmi/Wallet'
import FindOffline from '@/components/Find/Offline'
import BBCDetail from '@/components/BBCclassify/BBCDetail'
import BBCCDetail from '@/components/BBCclassify/BBCCDetail'
import AnswersDetail from '@/components/Answers/Detail'
import FindShopDetail from '@/components/Find/ShopDetail'
import FindIssueDetail from '@/components/Find/IssueDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/bbc-personal',
  routes: [
    {
      path: '/',
      name: 'admin',
      component: Index,
      redirect: '/personal',
      children:[
        {path: 'personal', name: 'personal', component:HomePersonal,},
        {path: 'home', name: 'home', component:HomeIndex,},
        {path: 'cmi', name: 'cmi', component:Cmi,children:[
          {path: 'index', name: 'cmi-index', component:CmiIndex,},
          {path: 'invite', name: 'cmi-invite', component:CmiInvite,},
          {path: 'mission', name: 'cmi-mission', component:CmiMission,},
          {path: 'rule', name: 'cmi-rule', component:CmiRule,},
          {path: 'detail', name: 'cmi-detail', component:CmiDetail,},
          {path: 'ticket', name: 'cmi-ticket', component:CmiTicket,},
          {path: 'ticketDetail', name: 'cmi-ticket-detail', component:CmiTicketDetail,},
          {path: 'give', name: 'cmi-give', component:CmiGive,},
          {path: 'giveSuccess', name: 'cmi-give-success', component:CmiGiveSuccess,},
          {path: 'giveDetail', name: 'cmi-give-detail', component:CmiGiveDetail,},
          {path: 'wallet', name: 'cmi-wallet', component:CmiWallet,},
          {path: 'cmimymember', name: 'cmi-my-member', component:CmiMyMember},
        ]},
        {path: 'offline', name: 'find-offline', component:FindOffline},
        {path: 'abbcdetail', name: 'bbc-detail', component:BBCDetail},
        {path: 'abbccdetail', name: 'bbcc-detail', component:BBCCDetail},
        {path: 'answersdetail', name: 'answers-detail', component:AnswersDetail},
        {path: 'findshopdetail', name: 'find-shop-detail', component:FindShopDetail},
        {path: 'findissuedetail', name: 'find-issue-detail', component:FindIssueDetail},
        {path: 'actindex', name: 'actindex', component: () => import('@/components/Activity/Aindex'), children: [
          {path: 'asharer', name: 'asharer', component: () => import('@/components/Activity/Asharer')},
          {path: 'abysharer', name: 'abysharer', component: () => import('@/components/Activity/Abysharer')},
          {path: 'abysharersuccess', name: 'abysharersuccess', component: () => import('@/components/Activity/Abysharersuccess')},
          {path: 'alogin', name: 'alogin', component: () => import('@/components/Activity/Alogin')},
          {path: 'abeforelogin', name: 'abeforelogin', component: () => import('@/components/Activity/AbeforeLogin')}
        ]}
      ]
    }
  ]
})
