// pages/main-video/main-video.js
import { getTopMV } from "../../services/video"
Page({
  data:{
    videoList:[],
    offset:0
  },
  onLoad(){
    this.fetchTopMV()
  },

  //发送网络请求的方法
  async fetchTopMV(){
    // getTopMV().then(res => {
    //   // console.log(res);
    //   this.setData({videoList:res.data})
    // })
    const res=await getTopMV(this.data.offset)
    
    const newVideoList=[...this.data.videoList,...res.data]

    this.setData({ videoList: newVideoList })
    this.data.offset = this.data.videoList.length
    this.data.hasMore = res.hasMore

    // // 停止下拉刷新
    // wx.stopPullDownRefresh()
  },
  //监听页面上拉下拉加载
  onReachBottom(){
    // console.log("bottom");
    //50之后没有数据了 
    // 判断是否有更多数据
    if(!this.data.hasMore) return
    // 如果有数据 再请求新的数据
    this.fetchTopMV()

  },
  async onPullDownRefresh(){
    this.setData({ videoList:[] })
    this.data.offset=0
    this.data.hasMore=true

    await this.fetchTopMV()
    // 停止下拉刷新
    wx.stopPullDownRefresh()
    // console.log("pull")
  },
  //界面监听事件
  onVideoItemTap(event){
    // console.log("bind")
    // const item = event.currentTarget.dataset.item
    // // console.log(event)
    // // console.log(item) //undefind
    // wx.navigateTo({
    //   url: `/pages/detial-video/detail-video?id=${item.id}`,
    // })
  }
})