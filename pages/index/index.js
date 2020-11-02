const req = require('../../utils/request');//要../../
Page({
  requ(){
    req({
      interface:'login',
      data:{
        username:'wanzi',
        pw:'1234'
      },
     onsuccess:function(res){
       console.log(res)
      
       if(res.data.status=='success'){
          wx.setStorageSync('token', res.data.data.token)
          wx.navigateTo({
            url: '../home/home',
          })
       }else{
          console.log('您的输入有误，请重新操作')
       }
     },
     onfile:function(err) {
       console.log(err)
     }
    })
  }
})