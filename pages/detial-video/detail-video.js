// pages/detial-video/detail-video.js
import { getMVUrl,getMVInfo,getMVRelated } from "../../services/video"
Page({
  data:{
    id:0,
    mvUrl:"",
    mvInfo:{},
    relatedVideo:[],
    danmuList:[
      {text:"hhh",color:"#ff0000",time:3},
      {text:"芜湖~",color:"#ffff00",time:10},
    ]
  },
  onLoad(options){
    const id = options.id
    this.setData({id})

    this.fetchMVUrl()
    this.fetchMVInfo()
    this.fetchMVRelated()
    
  },
  async fetchMVUrl(){
    // getMVUrl(id).then(res => {
    //   // console.log(res)
    //   this.setData({ mvUrl:res.data.url })
    // })
    const res = await getMVUrl(this.data.id)
    this.setData({ mvUrl:res.data.url })
  },
  async fetchMVInfo(){
    const res = await getMVInfo(this.data.id)
    // console.log(res);
    this.setData({ mvInfo:res.data })
  },
  async fetchMVRelated(){
    const res = await getMVRelated(this.data.id)
    // console.log(res);
    this.setData({ relatedVideo:res.data })
  }
})