//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    loop: true,
    circular: true,
    imgUrls: [
      { img: '/images/EmptyBanner.jpg', openpath: ''},
      { img: '/images/EmptyBanner1.jpg', openpath: ''},
      { img: '/images/EmptyBanner2.jpg', openpath: ''},
      { img: '/images/EmptyBanner3.jpg', openpath: ''}
    ],
    server: [
      {
        img: "../../images/sfz.png",
        openpath: "../../pages/IDCard/IDCard",
        text: "身份证查询"
      },
      {
        img: "../../images/yhk.png",
        openpath: "../../pages/bankQuery/bankQuery",
        text: "银行查询"
      },
      {
        img: "../../images/gsd.png",
        openpath: "../../pages/mobileAddress/index",
        text: "手机归属地"
      },
      {
        img: "../../images/ip.png",
        openpath: "../../pages/ipAddress/index",
        text: "IP查询"
      },
      {
        img: "../../images/sc.png",
        openpath: "../../pages/figure/figure",
        text: "身材计算"
      },
      // {
      //   img: "../../images/cha.png",
      //   openpath: "../../pages/cha/cha",
      //   text: "查拼音"
      // },
      {
        img: "../../images/upload.png",
        openpath: "../../pages/upload/upload",
        text: "图片上传" 
      },
      {
        img: "../../images/clac.png",
        openpath: "../../pages/calculator/index",
        text: "计算器"
      },
      {
        img: "../../images/hl.png",
        openpath: "../../pages/cand/index",
        text: "程序员黄历"
      },
      {
        img: "../../images/gz.png",
        openpath: "../../pages/game/game",
        text: "摇骰子"
      },
      {
        img: "../../images/kd.png",
        openpath: "../../pages/kuaidi/index",
        text: "全国快递"
      },
      {
        img: "../../images/2048.png",
        openpath: "../../pages/2048/2048",
        text: "2048"
      }
    ],
    unserver: [
      {
        img: "../../images/wsyt.png",
        openpath: "../../pages/gojuuonn/gojuuonn",
        text: "五十音图"
      },
      {
        img: "../../images/gj.png",
        openpath: "../../pages/",
        text: "公交地铁"
      },
      {
        img: "../../images/gjj.png",
        openpath: "../../pages/",
        text: "公积金计算"
      },
      
      {
        img: "../../images/sl.png",
        openpath: "../../pages/",
        text: "",
        id: 'more'
      },
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  dialoag: function (e) {
    if(e.target.id !== "more"){
      wx.showModal({
        title: '提示',
        content: '开发中，敬请期待',
        showCancel: false
      })
    }
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onLaunch: function () {
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          console.log(res.code)
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '晋生活',
      path: '/page/index'
    }
  }

})
