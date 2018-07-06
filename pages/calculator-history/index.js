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
    refreshTime: '',
    page:10,
    allPages: '',    // 总页数
    currentPage: 1,  // 当前页数  默认是1
    loadMoreData: '加载更多……'
  },
  refresh: function () {
    console.log(1)
    let date = new Date();
    this.setData({
      hideHeader: false,
      refreshTime: date.toLocaleTimeString()
    })
    const that = this;
    setTimeout(function () {
      that.setData({
        currentPage: 1,
        page: 10,
        hideHeader: true,
        history: wx.getStorageSync('history').slice(0, that.data.page)
      })
    }, 500);
  },
  loadMore: function () {
    console.log(2)
    const that = this
    let date = new Date();
    this.setData({
      refreshTime: date.toLocaleTimeString(),
      hideBottom: false
    })
    setTimeout(function(){
      that.setData({
        hideBottom: true,
        currentPage: that.data.currentPage + 1,
        page: that.data.page * that.data.currentPage,
        history: wx.getStorageSync('history').slice(0, that.data.page)
      })
    }, 500)
    
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

