import {GRequest} from "./index"

export function getMusicBanner(type=0){
  return GRequest.get({
    url:"/banner",
    data:{
      type
    }
  })
}

export function getPlaylistDetail(id){
  return GRequest.get({
    url:"/playlist/detail",
    data:{
      id
    }
  })
}


export function getSongMenuList(cat = "全部", limit = 6, offset = 0) {
  return GRequest.get({
    url: "/top/playlist",
    data: {
      cat,
      limit,
      offset
    }
  })
}

export function getSongMenuTag() {
  return GRequest.get({
    url: "/playlist/hot"
  })
}
