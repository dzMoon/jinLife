// pages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: []
  },
  upload: function () {
    const that = this
    console.log(that.data.imgList)
    const arr = that.data.imgList
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片    
        that.setData({
          imgList: res.tempFilePaths
        })
        wx.setStorageSync("uploadImg", res.tempFilePaths)
      }
    })
  },
  delete: function (e) {
    this.data.imgList.splice(e.target.id, 1);
    this.setData({
      imgList: this.data.imgList
    })
    wx.setStorageSync("uploadImg", this.data.imgList)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    wx.getStorage({
      key: 'uploadImg',
      success: function (res) {
        that.setData({
          imgList: res.data
        })
      },
      fail:function(){
        that.setData({
          imgList:[]
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

  }
})