// pages/bankQuery/bankQuery.js
const utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bankCard: '',
    show: false,
    getdata: {}
  },
  /*获取银行卡号*/
  bankCard: function (e) {
    const bankCard = e.detail.value
    this.setData({
      bankCard: bankCard
    })
  },
  getdata: function () {
    const that = this
    wx.showLoading({
      title: '加载中',
    })
    if (!utils.isBankCard(this.data.bankCard)) return
    wx.request({
      url: 'https://www.zhaotool.com/v1/api/lt/e10adc3949ba59abbe56e057f20f883e/' + this.data.bankCard,
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      success: function (res) {
        wx.hideLoading();
        
        if(res.data.code == '0'){
          
          if (res.data.data){
            that.setData({
              getdata: res.data.data,
              show: true
            })
          }else{
            that.setData({
              getdata: '',
              show: false
            })
            wx.showModal({
              title: '错误提示',
              content: red.data.errMsg,
              showCancel: false
            })
          }
        }else{
          that.setData({
            getdata: '',
            show: false
          })
          wx.showModal({
            title: '错误提示',
            content: '暂无数据',
            showCancel: false
          })
        }
        console.log(res)
        console.log(that)
      },
      fail:function (err) {
        wx.hideLoading();
        that.setData({
          getdata: '',
          show: false
        })
        wx.showModal({
          title: '错误提示',
          content: err.errMsg,
          showCancel: false
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})