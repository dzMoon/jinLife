// pages/IDCard.js
const utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    IDCard: '',
    getdata: {},
    show: false
  },
  IDCard: function (e) {
    this.setData({
      IDCard: e.detail.value
    })
  },

  getdata: function () {
    var that = this;
    wx.showLoading({
      title: '加载中',
    });
    var IDCard = this.data.IDCard;
    if (!utils.isIDCard(IDCard)) { return; }
    // 请求数据
    wx.request({
      url: "https://www.zhaotool.com/v1/api/lt/e10adc3949ba59abbe56e057f20f883e/" + IDCard,
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      success: function (res) {
        wx.hideLoading();
        if (res.data.code == "0") {
          if (res.data.data == "" || res.data.data == "null" || res.data.data == null || res.data.data == "undefined" || res.data.data == undefined) {
            wx.showModal({
              title: '提示',
              content: "暂无数据",
              success: function (res) {
                that.setData({
                  show: false
                })
              }
            })
          } else {
            that.setData({
              show: true,
              getdata: res.data.data
            })
          }
        } else {
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            success: function (res) {
              that.setData({
                show: false
              })
            }
          })
        }
      },
      fail: function (err) {
        wx.hideLoading();
        wx.showModal({
          title: '错误信息',
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