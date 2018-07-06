// pages/IP/IP.js
const utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ip: "",
    show: false,
    getdata: {},
    title: '本机信息',
    local: {},
    localShow: false,
    localIP: '',
    lat:'',
    lng: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    // 请求数据
    wx.request({
      url: 'http://ip-api.com/json',
      success: function (data) {
        that.setData({
          localIP: data.data.query
        })
        wx.request({
          url: "https://www.zhaotool.com/v1/api/ip/location/e10adc3949ba59abbe56e057f20f883e?ip=" + data.data.query,
          data: {
          },
          header: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            console.log(that)
            wx.hideLoading();
            if (res.data.code == "0") {
              if (res.data.data == "" || res.data.data == "null" || res.data.data == null || res.data.data == "undefined" || res.data.data == undefined) {
                that.setData({
                  localShow: false
                })
              } else {
                that.setData({
                  localShow: true,
                  getdata: res.data.data.result,
                  lat: res.data.data.result.location.lat,
                  lng: res.data.data.result.location.lng
                })
              }

            } else {
              that.setData({
                localShow: false
              })
            }
          }
        })
      }
    })

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

  },
  /**
   * 获取用户输入 
   */
  ip: function (e) {
    this.setData({
      ip: e.detail.value
    })
  },
  /**
   *用户点击获取数据事件 
   */
  getdata: function (e) {
    var that = this;
    wx.showLoading({
      title: '加载中',
    });
    this.setData({
      lat: '',
      lng: '',
      localShow:false
    })
    var ip = this.data.ip;
    if (!utils.isIP(ip)) { return; }
    // 请求数据
    wx.request({
      url: "https://www.zhaotool.com/v1/api/ip/location/e10adc3949ba59abbe56e057f20f883e?ip=" + ip,
      data: {
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(JSON.stringify(res))
        wx.hideLoading();
        if (res.data.code == "0") {
          if (res.data.data == "" || res.data.data == "null" || res.data.data == null || res.data.data == "undefined" || res.data.data == undefined) {
            wx.showModal({
              title: '提示',
              content: "暂无数据",
              success: function (res) {
                that.setData({
                  show: false,
                  localShow: false
                })
              }
            })
          } else {
            that.setData({
              show: true,
              title: '详细信息',
              localShow: false,
              getdata: res.data.data.result,
              lat: res.data.data.result.location.lat,
              lng: res.data.data.result.location.lng
            })
          }

        } else {
          wx.showModal({
            title: '提示',
            content: "查询失败",
            success: function (res) {
              that.setData({
                show: false,
                localShow: false
              })
            }
          })
        }
      }
    })
  }
})