// pages/calculator-history/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history: [], // 列表显示的数据源
    toView: 'red',
    scrollTop: 100,
    refreshTime: '', // 刷新的时间 
    hideHeader: true,
    hideBottom: true,
    page: 18,
    allPages: '',    // 总页数
    currentPage: 1,  // 当前页数  默认是1
    loadMoreData: '下拉刷新……'
  },
  getData: function () {
    var self = this;
    var pageIndex = self.data.currentPage;
    // success: function () {
    //   var dataModel = res.data;
    //   if (dataModel.showapi_res_code == 0) {
    //     if (dataModel.showapi_res_body.ret_code == 0) {
    //       if (pageIndex == 1) { // 下拉刷新
    //         self.setData({
    //           allPages: dataModel.showapi_res_body.pagebean.allPages,
    //           contentlist: dataModel.showapi_res_body.pagebean.contentlist,
    //           hideHeader: true
    //         })
    //       } else { // 加载更多
    //         console.log('加载更多');
    //         var tempArray = self.data.contentlist;
    //         tempArray = tempArray.concat(dataModel.showapi_res_body.pagebean.contentlist);
    //         self.setData({
    //           allPages: dataModel.showapi_res_body.pagebean.allPages,
    //           contentlist: tempArray,
    //           hideBottom: true
    //         })
    //       }
    //     }
    //   }
    // }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let history = wx.getStorageSync('history').slice(0, this.data.page) || []
    const that = this;
    this.setData({
      history: history,
      allPages: history / that.data.page
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
    const that = this
    const totalHistory = wx.getStorageSync('history')
    let date = new Date()

    that.setData({
      hideBottom: false,
      refreshTime: date.toLocaleTimeString(),
      loadMoreData: '上拉刷新....'
    })
    setTimeout(function () {
      that.setData({
        hideBottom: true,
        history: history = totalHistory.slice(0, that.data.page),
        currentPage: 1
      })
    }, 3000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const that = this
    const totalHistory = wx.getStorageSync('history')
    let date = new Date()
    let currentPage = that.data.currentPage + 1
    that.setData({
      hideBottom: false,
      refreshTime: date.toLocaleTimeString(),
      loadMoreData: '下拉加载...'
    })
    setTimeout(function () {
      that.setData({
        hideBottom: true,
        history: history = that.data.history.lenghth < totalHistory.length ? totalHistory.slice(0, that.data.page * currentPage) : totalHistory,
        currentPage: currentPage
      })
    }, 1000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

