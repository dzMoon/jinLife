const utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderNumber: '73959556900',
    getdata: '',
    show: false
  },
  orderNumber: function (e) {
    this.setData({
      orderNumber: e.detail.value
    })
  },

  getdata: function () {
    var that = this;
    wx.showLoading({
      title: '加载中',
    });
    var orderNumber = this.data.orderNumber;
    if (!utils.isOrderNumber(orderNumber)) { return; }
    // 请求数据
    wx.request({
      url: "http://m.kuaidihelp.com/express/queryResult?word=" + orderNumber,
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      success: function (res) {
        console.log(res)
        wx.hideLoading();
        that.setData({
          show: true,
          getdata: res.data
        })
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