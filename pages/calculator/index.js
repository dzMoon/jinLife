
var app = getApp()

Page({
  data: {
    left: '0',
    center: '',
    right: '',
    result: '',
    hasDengyu: false, //是否触发等号,
    history: Array
  },
  onLoad: function () {
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../calculator-history/index'
    })
  },

  evt_touch: function (e) {
    console.log("按下的按键是 : " + e.target.id)
    const that = this
    //按下的按钮
    var enid = e.target.id;
    //当前左边的数值
    var left = this.data.left;
    //当前中间的数值
    var center = this.data.center;
    //当前右边的数值
    var right = this.data.right;
    //当前结果值
    var result = this.data.result;

    switch (enid) {
      case 'jia':
        this.setData({
          center: '+'
        })
        if (this.data.hasDengyu) { //等号恩过之后 操作符直接操作结果
          this.setData({
            left: that.data.result,
            hasDengyu: false,
            result: '',
            right: ''
          })
        }
        break;
      case 'jian':
        this.setData({
          center: '-'
        })
        if (this.data.hasDengyu) { //等号恩过之后 操作符直接操作结果
          this.setData({
            left: that.data.result,
            result: '',
            right: '',
            hasDengyu: false
          })
        }
        break;
      case 'cheng':
        this.setData({
          center: '*'
        })
        if (this.data.hasDengyu) { //等号恩过之后 操作符直接操作结果
          this.setData({
            left: that.data.result,
            result: '',
            right: '',
            hasDengyu: false
          })
        }
        break;
      case 'chu':
        this.setData({
          center: '/'
        })
        if (this.data.hasDengyu) { //等号恩过之后 操作符直接操作结果
          this.setData({
            left: that.data.result,
            result: '',
            right: '',
            hasDengyu: false
          })
        }
        break;
      case 'ac':
        this.setData({
          left: 0,
          center: '',
          right: '',
          result: ''
        })

        break;
      case 'dengyu':
        const watch = this.data.center
        if (this.data.right) { // 右边值为空时不允许进行运损
          if (watch == '/') {
            this.setData({
              result: ((Number(that.data.left) / Number(that.data.right)).toFixed(6) + '').split('.')[1] > 0 ? (Number(that.data.left) / Number(that.data.right)).toFixed(2) : (Number(that.data.left) / Number(that.data.right)).toFixed(0) 
            })
          } else if (watch == '+') {
            this.setData({
              result: Number(that.data.left) + Number(that.data.right)
            })
          } else if (watch == '*') {
            this.setData({
              result: Number(that.data.left) * Number(that.data.right)
            })
          } else if (watch == '-') {
            this.setData({
              result: Number(that.data.left) - Number(that.data.right)
            })
          }
          that.data.history.push(that.data.left + '' + that.data.center + '' + that.data.right + '=' + that.data.result)
          wx.setStorage({
            key: "history",
            data: that.data.history
          })
          this.setData({  //摁下等于按钮 将表达式清空，记录嗯过等号
            left: '',
            right: '',
            center: '',
            hasDengyu: true
          })

        }
        break;
      default:
        if (!this.data.hasDengyu) { //如果已经恩过等号，将结果变为变为 left，清空结果
          if (this.data.center == '') {
            if (that.data.left == '0') {
              this.setData({
                left: ''
              })
            }
            this.setData({
              left: that.data.left + enid
            })
          } else {
            this.setData({
              right: enid + that.data.right
            })
          }
        } else {
          this.setData({
            left: '',
            right: '',
            center: '',
            result: '',
            hasDengyu: false
          })
          this.setData({
            left: that.data.left + enid
          })

        }


    }
  },
  onLoad: function () {
    const that = this
    let history = wx.getStorageSync('history') || []

    that.setData({
      history: history
    })

  }

})
