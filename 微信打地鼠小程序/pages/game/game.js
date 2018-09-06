// pages/game/game.js

var dataMice = [
  {
    src: '../../assets/img/vendor_people00.png'
  },
  {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }, {
    src: '../../assets/img/vendor_people00.png'
  }
]

Page({
  /**
   * 页面的初始数据
   */
  data: {
    mice:[
      {
        src: '../../assets/img/vendor_people00.png'
      },
      {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }, {
        src: '../../assets/img/vendor_people00.png'
      }
    ],
    count: 5,
    time : 10,
    interval:'',
    currentIndex:0,
    score:0
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.data.interval = setInterval(()=>{
      var num = parseInt(Math.random()*12)
      this.data.currentIndex = num
      var list = JSON.parse(JSON.stringify(dataMice))
      list[num] = { src: '../../assets/img/vendor_hole01.png'}
      this.setData({
        time:--this.data.time,
        mice:list
      })
      if(this.data.time==0){
        clearInterval(this.data.interval)
        wx.redirectTo({
          url: '../endGame/endGame?score='+this.data.score,
        })
      }
    },1000)
  },
  clickMice:function(e){
    var index = e.target.dataset.index
    if(index==this.data.currentIndex){
      this.data.score+=10
      var list = JSON.parse(JSON.stringify(dataMice))
      list[index] = { src: '../../assets/img/vendor_hole02.png'}
      this.setData({
        mice:list
      })
    }else{
      var num = this.data.count
      num--;
      if(num==0){
        wx.redirectTo({
          url: '../endGame/endGame?score='+this.data.score,
        })
      }
      this.setData({
        count:num
      })
    }
  }
})