// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dice: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'],
    show: false,
    total: 0,
    num1: 0,
    num2: 0,
    num3: 0,
    timer: null,
    buttonValue: "摇一摇",
    buttonType: 'primary'
  },
  toggle: function (e) {
    const that = this
    if (this.data.timer) {
      clearInterval(this.data.timer)
      this.setData({
        buttonValue: "摇一摇",
        timer: null,
        total: that.data.num1 + that.data.num2 + that.data.num3 +3, // 数组下标从0开始
        show: true
      })
    } else {
      this.getRondom(function () {
        that.setData({
          buttonValue: "停止",
        })
      })
    }
  },
  getRondom(callback) {
    const that = this
    this.data.timer = setInterval(function () {
      let num1 = Math.floor(Math.random() * 5) + 1
      let num2 = Math.floor(Math.random() * 5) + 1
      let num3 = Math.floor(Math.random() * 5) + 1
      that.setData({
        num1: num1,
        num2: num2,
        num3: num3
      })
    }, 200)
    callback()
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