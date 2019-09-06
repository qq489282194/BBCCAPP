import Vue from 'vue'
import Router from 'vue-router'

const Index = (resolve) => { import('@/components/Index').then((module) => { resolve(module) })}
const HomePersonal = (resolve) => { import('@/components/Home/Personal').then((module) => { resolve(module) })}
const Cmi = (resolve) => { import('@/components/Cmi/Cmi').then((module) => { resolve(module) })}
// const CmiIndex = (resolve) => { import('@/components/Cmi/Index').then((module) => { resolve(module) })}
const CmiInvite = (resolve) => { import('@/components/Cmi/Invite').then((module) => { resolve(module) })}
const CmiMission = (resolve) => { import('@/components/Cmi/Mission').then((module) => { resolve(module) })}
const CmiRule = (resolve) => { import('@/components/Cmi/Rule').then((module) => { resolve(module) })}
const CmiDetail = (resolve) => { import('@/components/Cmi/Detail').then((module) => { resolve(module) })}
const CmiNewDetail = (resolve) => { import('@/components/Cmi/NewDetail').then((module) => { resolve(module) })}
const CmiTicket = (resolve) => { import('@/components/Cmi/Ticket').then((module) => { resolve(module) })}
const CmiTicketDetail = (resolve) => { import('@/components/Cmi/TicketDetail').then((module) => { resolve(module) })}
const CmiGive = (resolve) => { import('@/components/Cmi/Give').then((module) => { resolve(module) })}
const CmiGiveSuccess = (resolve) => { import('@/components/Cmi/GiveSuccess').then((module) => { resolve(module) })}
const CmiGiveDetail = (resolve) => { import('@/components/Cmi/GiveDetail').then((module) => { resolve(module) })}
const CmiNewWallet = (resolve) => { import('@/components/Cmi/NewWallet').then((module) => { resolve(module) })}
const FindOffline = (resolve) => { import('@/components/Find/Offline').then((module) => { resolve(module) })}
const BBCDetail = (resolve) => { import('@/components/BBCclassify/BBCDetail').then((module) => { resolve(module) })}
const BBCCDetail = (resolve) => { import('@/components/BBCclassify/BBCCDetail').then((module) => { resolve(module) })}
const AnswersDetail = (resolve) => { import('@/components/Answers/Detail').then((module) => { resolve(module) })}
const FindIssueDetail = (resolve) => { import('@/components/Find/IssueDetail').then((module) => { resolve(module) })}
const NewSys = (resolve) => { import('@/components/memberSys/Newsys').then((module) => { resolve(module) })}
const Invitation3 = (resolve) => { import('@/components/Invitation/invitation3').then((module) => { resolve(module) })}
const GiftPoint = (resolve) => { import('@/components/giftPoint/giftPoint').then((module) => { resolve(module) })}
const NewIndex1 = (resolve) => { import('@/components/Cmi/NewIndex1').then((module) => { resolve(module) })}
const BusinessDetails = (resolve) => { import('@/components/Cmi/BusinessDetails').then((module) => { resolve(module) })}
const BusinessInvitationRules = (resolve) => { import('@/components/Cmi/BusinessInvitationRules').then((module) => { resolve(module) })}
const ReturnsDetail = (resolve) => { import('@/components/Cmi/ReturnsDetail').then((module) => { resolve(module) })}
const NewWalletDetail = (resolve) => { import('@/components/Cmi/NewWalletDetail').then((module) => { resolve(module) })}
const IntegralPaid = (resolve) => { import('@/components/Cmi/IntegralPaid').then((module) => { resolve(module) })}
const IntegralPaidDetail = (resolve) => { import('@/components/Cmi/IntegralPaidDetail').then((module) => { resolve(module) })}
const UserManual = (resolve) => { import('@/components/Cmi/UserManual').then((module) => { resolve(module) })}
const NewUpGrade = (resolve) => { import('@/components/UpGrade/NewUpGrade').then((module) => { resolve(module) })}
const Aindex = (resolve) => { import('@/components/Activity/Aindex').then((module) => { resolve(module) })}
const Asharer = (resolve) => { import('@/components/Activity/Asharer').then((module) => { resolve(module) })}
const Abysharersuccess = (resolve) => { import('@/components/Activity/Abysharersuccess').then((module) => { resolve(module) })}
const Alogin = (resolve) => { import('@/components/Activity/Alogin').then((module) => { resolve(module) })}
const Abysharer = (resolve) => { import('@/components/Activity/Abysharer').then((module) => { resolve(module) })}
const AbeforeLogin = (resolve) => { import('@/components/Activity/AbeforeLogin').then((module) => { resolve(module) })}
const NewMember = (resolve) => { import('@/components/Member/NewMember').then((module) => { resolve(module) })}
const giftHistory = (resolve) => { import('@/components/giftPoint/giftHistory').then((module) => { resolve(module) })}
// const InviteFriends = (resolve) => { import('@/components/Invitation/InviteFriends').then((module) => { resolve(module) })}
const InviteFriends = (resolve) => { import('@/components/Invitation/InviteFriends2').then((module) => { resolve(module) })}
const poster = (resolve) => { import('@/components/Invitation/poster').then((module) => { resolve(module) })}
const intIntro = (resolve) => { import('@/components/Member/intIntro').then((module) => { resolve(module) })}
const ShareFriend = (resolve) => { import('@/components/ShareFriend/Index').then((module) => { resolve(module) })}
const search = (resolve) => { import('@/components/ShareFriend/search').then((module) => { resolve(module) })}
const DataRevenue = (resolve) => { import('@/components/ShareFriend/DataRevenue').then((module) => { resolve(module) })}
const scorePay = (resolve) => { import('@/components/Member/scorePay').then((module) => { resolve(module) })}
const openApp = (resolve) => { import('@/components/Invitation/openApp').then((module) => { resolve(module) })}
const sharerImg = (resolve) => { import('@/components/Cmi/sharerImg').then((module) => { resolve(module) })}
const ToDownloadAPP = (resolve) => { import('@/components/ToDownloadAPP/ToDownloadAPP').then((module) => { resolve(module) })}

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
        // {path: 'home', name: 'home', component:HomeIndex,},
        {path: 'cmi', name: 'cmi', component:Cmi,children:[
          // {path: 'index', name: 'cmi-index', component:CmiIndex,},
          {path: 'invite', name: 'cmi-invite', component:CmiInvite,},
          {path: 'mission', name: 'cmi-mission', component:CmiMission,},
          {path: 'rule', name: 'cmi-rule', component:CmiRule,},
          {path: 'detail', name: 'cmi-detail', component:CmiDetail,},
          {path: 'newdetail', name: 'cmi-newdetail', component:CmiNewDetail,},
          {path: 'ticket', name: 'cmi-ticket', component:CmiTicket,},
          {path: 'ticketDetail', name: 'cmi-ticket-detail', component:CmiTicketDetail,},
          {path: 'give', name: 'cmi-give', component:CmiGive,},
          {path: 'giveSuccess', name: 'cmi-give-success', component:CmiGiveSuccess,},
          {path: 'giveDetail', name: 'cmi-give-detail', component:CmiGiveDetail,},
          // {path: 'wallet', name: 'cmi-wallet', component:CmiWallet,},
          {path: 'newwallet', name: 'cmi-newwallet', component:CmiNewWallet,},
          // {path: 'cmimymember', name: 'cmi-my-member', component:CmiMyMember},
          // {path: 'explain', name: 'cmi-explain', component:Explain},
          // {path: 'newindex', name: 'cmi-newindex', component: () => import('@/components/Cmi/NewIndex')},
          {path: 'newindex1', name: 'cmi-newindex1', component:NewIndex1},
          // {path: 'expcard', name: 'cmi-expcard', component: () => import('@/components/Cmi/ExpCard')},
          // {path: 'expcarddetail', name: 'cmi-expcard-detail', component: () => import('@/components/Cmi/ExpCardDetail')},
          {path: 'businessdetails', name: 'cmi-business-details', component:BusinessDetails},
          {path: 'businessinvitationrules', name: 'cmi-business-invitation-rules', component:BusinessInvitationRules},
          {path: 'returnsdetail', name: 'cmi-returns-detail', component:ReturnsDetail},
          {path: 'newwalletdetail', name: 'cmi-wallet-detail', component:NewWalletDetail},
          {path: 'integralpaid', name: 'cmi-integral-paid', component:IntegralPaid},
          {path: 'integralpaiddetail', name: 'cmi-integral-paid-detail', component:IntegralPaidDetail},
          {path: 'usermanual', name: 'cmi-user-manual', component:UserManual}
        ]},
        {path: 'offline', name: 'find-offline', component:FindOffline},
        {path: 'abbcdetail', name: 'bbc-detail', component:BBCDetail},
        {path: 'abbccdetail', name: 'bbcc-detail', component:BBCCDetail},
        {path: 'answersdetail', name: 'answers-detail', component:AnswersDetail},
        
        // {path: 'findshopdetail', name: 'find-shop-detail', component:FindShopDetail},
        {path: 'findissuedetail', name: 'find-issue-detail', component:FindIssueDetail},
        // {path: 'upgrade', name: 'upgrade', component: () => import('@/components/UpGrade/UpGrade')},
        {path: 'newupgrade', name: 'newupgrade', component:NewUpGrade},
        {path: 'actindex', name: 'actindex', component:Aindex, children: [
          {path: 'asharer', name: 'asharer', component:Asharer},
          {path: 'abysharersuccess', name: 'abysharersuccess', component:Abysharersuccess},
          {path: 'alogin', name: 'alogin', component:Alogin},
        ]},
        {path: 'abysharer', name: 'abysharer', component:Abysharer},
        {path: 'abeforelogin', name: 'abeforelogin', component:AbeforeLogin},
        // {path: 'mymember', name: 'mymember', component: () => import('@/components/Member/MyMember'), children: []},
        {path: 'newmember', name: 'newmember', component:NewMember},
        // {path: 'sys', name: 'sys', component:Sys},
        {path: 'newsys', name: 'newsys', component:NewSys},
        // {path: 'equity', name: 'equity', component:Equity},
        // {path: 'invitation', name: 'invitation', component:Invitation, children: [
        //   {path: 'invitation', name: 'invitation', component: () => import('@/components/Invitation/invitation')},
        // ]},
        {path: 'newinvitation', name: 'newinvitation', component:Invitation3, children: [
          {path: 'newinvitation', name: 'newinvitation', component:Invitation3},
        ]},
        {path: 'giftPoint', name: 'giftPoint', component:GiftPoint, children: [
          {path: 'giftPoint', name: 'giftPoint', component:GiftPoint},
        ]},
         {path: 'giftHistory', name: 'giftHistory', component:giftHistory},
        // {path: 'invitation', name: 'invitation', component: () => import('@/components/Invitation/invitation')},
        {path: 'invitefriends', name: 'invitefriends', component:InviteFriends},
        {path: 'poster', name: 'poster', component:poster},
        {path: 'intIntro', name: 'intIntro', component:intIntro},
        {path: 'shareFriend', name: 'ShareFriend', component:ShareFriend},
        {path: 'search', name: 'search', component:search},
        {path: 'DataRevenue', name: 'DataRevenue', component:DataRevenue},
        {path: 'scorePay', name: 'scorePay', component:scorePay},
        {path: 'openApp', name: 'openApp', component:openApp},
        {path: 'sharerimg', name: 'sharerimg', component:sharerImg},
        {path: 'todownloadAPP', name: 'todownloadAPP', component:ToDownloadAPP},
      ]
    },

  ]
})
