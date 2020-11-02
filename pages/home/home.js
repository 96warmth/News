const req = require('../../utils/request');//要../../
Page({
  data:{
  },
  getNews(){
    wx.navigateTo({
      url: '../news/news',
    })
  },
  onLoad: function (options) {
    req({
      interface:'get_news',
      data:{
        time:'2020-10-24',
        type:'所有'
      },
      onsuccess:function(req){
        console.log(req)
      },
      onfail:function(err){
        console.log(err)
      }
    })
  },
})