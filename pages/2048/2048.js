// pages/2048/2048.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
    r1c1: '',
    r1c2: '',
    r1c3: '',
    r1c4: '',

    r2c1: '',
    r2c2: '',
    r2c3: '',
    r2c4: '',

    r3c1: '',
    r3c2: '',
    r3c3: '',
    r3c4: '',

    r4c1: '',
    r4c2: '',
    r4c3: '',
    r4c4: '',
    startX: '',
    startY: '',
    score:0

  },
  moveStart: function (e) {
    this.setData({
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY
    })
  },
  move: function (e) {
    const moveX = e.touches[0].clientX
    const moveY = e.touches[0].clientY
    // 方向偏左 && 水平方向移动幅度 > 垂直方向移动幅度 ======> 数字整体向左移动并合并
    if (this.data.startX - moveX > 0 && Math.abs(this.data.startY - moveY > this.data.startX - moveX) ) {

    }

    // 方向偏右 && 水平方向移动幅度 > 垂直方向移动幅度 ======> 数字整体向右移动并合并
    if (this.data.startX - moveX < 0 && Math.abs(this.data.startY - moveY > this.data.startX - moveX)) {

    }

    // 方向偏上 && 水平方向移动幅度 < 垂直方向移动幅度 ======> 数字整体向上移动并合并
    if (this.data.startY - moveY > 0 && Math.abs(this.data.startY - moveY < this.data.startX - moveX)) {

    }

    // 方向偏下 && 水平方向移动幅度 < 垂直方向移动幅度 ======> 数字整体向下移动并合并
    if (this.data.startY - moveY < 0 && Math.abs(this.data.startY - moveY < this.data.startX - moveX)) {

    }

    

  },
  moveEnd: function (e) {
    this.setData({
      startX: '',
      startY: '',
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