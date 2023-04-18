const regExp = {
  comma: function (num) {
    return new Intl.NumberFormat('ko-KR').format(num)
  },
  uncomma: function (str) {
      str = String(str)
      return str.replace(/[^-.\d]/g, '')
  },
}

export default regExp;