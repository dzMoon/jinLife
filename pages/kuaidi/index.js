const utils = require('../../utils/util.js')
const WxParse = require('../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderNumber: '',
    getdata: '',
    show: false,
    spellName: '',
    name: '',
    showHistory: false,
    array: [
      { name: '京东', spellName: 'jd' },
      { name: '申通', spellName: 'shentong' },
      { name: 'EMS', spellName: 'ems' },
      { name: '顺丰', spellName: 'shunfeng' },
      { name: '圆通', spellName: 'yuantong' },
      { name: '中通', spellName: 'zhongtong' },
      { name: '韵达', spellName: 'yunda' },
      { name: '天天', spellName: 'tiantian' },
      { name: '汇通', spellName: 'huitongkuaidi' },
      { name: '全峰', spellName: 'quanfengkuaidi' },
      { name: '德邦', spellName: 'debangwuliu' },
      { name: '宅急送', spellName: 'zhaijisong' }
    ],
    history: []
  },
  orderNumber: function (e) {
    this.setData({
      orderNumber: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    const that = this
    this.setData({
      spellName: that.data.array[Number(e.detail.value)].spellName,
      name: that.data.array[Number(e.detail.value)].name
    })
  },
  getdata: function () {
    const that = this;
    wx.showLoading({
      title: '加载中',
    });
    const orderNumber = this.data.orderNumber
    const type = this.data.name
    if (!utils.isOrderNumber(orderNumber, type)) { return }
    wx.request({
      url: `http://www.kuaidi100.com/query?type=${that.data.spellName}&postid= + ${orderNumber}`,
      method: 'GET',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading();
        console.log(res.data.data)
        if (res.data.data.length == 0) {
          wx.showModal({
            title: '错误提示',
            content: res.data.message,
            showCancel: false
          })
          that.setData({
            history: [],
            showHistory: false
          })

        } else {
          that.setData({
            history: res.data.data,
            showHistory: true
          })
        }
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