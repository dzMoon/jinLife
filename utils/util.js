/* 格式化时间 */
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/* 身份证号校验 */
const isIDCard = iDCard => {
  var reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/;
  console.log(iDCard)
  if (reg.test(iDCard) === false) {
    wx.showToast({
      title: '输入不合法',
      icon: 'none',
      image: '../../images/error.png',
      duration: 2000
    })
    return false;
  } else {
    return true
  }
}
/* ip校验 */
const isIP = ip => {
  if (ip == '' || ip.split('.').length != 4) {
    wx.showToast({
      title: '输入不合法',
      icon: 'none',
      image: '../../images/error.png',
      duration: 2000
    })
    return false;
  } else {
    return true
  }
}


/* 银行卡号校验*/
const isBankCard = bankCard => {
  if (bankCard == "") {
    wx.showToast({
      title: '请填写银行卡号',
      icon: 'none',
      image: '../../images/error.png',
      duration: 2000
    })
    return false;
  }
  if (bankCard.length < 16 || bankCard.length > 19) {
    wx.showToast({
      title: '银行卡格式错误',
      icon: 'none',
      image: '../../images/error.png',
      duration: 2000
    })
    return false;
  }
  var num = /^\d*$/; //全数字
  if (!num.exec(bankCard)) {
    wx.showToast({
      title: '银行卡格式错误',
      icon: 'none',
      image: '../../images/error.png',
      duration: 2000
    })
    return false;
  }
  //开头6位
  var strBin = "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
  if (strBin.indexOf(bankCard.substring(0, 2)) == -1) {
    wx.showToast({
      title: '银行卡格式错误',
      icon: 'none',
      image: '../../images/error.png',
      duration: 2000
    })
    return false;
  }
  return true;
}

/* 订单号校验 */
const isOrderNumber = (isOrderNumber, type) => {
  if (isOrderNumber == "") {
    wx.showToast({
      title: '请填写订单标号',
      icon: 'none',
      image: '../../images/error.png',
      duration: 2000
    })
    return false;
  } else {
    if (type == "") {
      wx.showToast({
        title: '请选择快递公司',
        icon: 'none',
        image: '../../images/error.png',
        duration: 2000
      })
      return false
    } else {
      return true
    }
  }
}

/* 手机号校验 */
const isMobile = mobile => {
  if (mobile == "") {
    wx.showToast({
      title: '请填写手机号',
      icon: 'none',
      image: '../../images/error.png',
      duration: 2000
    })
    return false;
  }
  if (mobile.length != 11) {
    wx.showToast({
      title: '手机号格式错误',
      icon: 'none',
      image: '../../images/error.png',
      duration: 2000
    })
    return false;
  }
  let valid_rule = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/ //正则表达式
  if (!valid_rule.test(mobile)) {
    wx.showToast({
      title: '手机号格式错误',
      icon: 'none',
      image: '../../images/error.png',
      duration: 2000
    })
    return false;
  }
  return true;
}
module.exports = {
  formatTime: formatTime,
  isIDCard: isIDCard,
  isBankCard: isBankCard,
  isIP: isIP,
  isOrderNumber: isOrderNumber,
  isMobile: isMobile
}
