
import { GRequest } from "./index" 
export function getTopMV(offset=0,limit=20){
  return GRequest.get({
    url:"/top/mv",
    data:{
      limit,
      offset
    }
  })
}

export function getMVUrl(id){
  return GRequest.get({
    url:"/mv/url",
    data:{
      id
    }
  })
}

export function getMVInfo(mvid){
  return GRequest.get({
    url:"/mv/detail",
    data:{
      mvid
    }
  })
}

export function getMVRelated(id){
  return GRequest.get({
    url:"/related/allvideo",
    data:{
      id
    }
  })
}