import {useEffect,useState} from 'react'

import { useSearchParams,Link } from 'react-router-dom'
import {YOUTUBE_SEARCH_API} from "../Utils/const"

import SearchCard from './SearchCard'



function SearchPage() {

  const [searchParams] = useSearchParams();
  const [searchVideo,setSearchVideo] =useState([]);

  useEffect(()=>{
    if(searchParams.get("q")){
      getSearchQueryVideo()
    }
  },[searchParams])

  const getSearchQueryVideo = async()=>{
      let res = await fetch(YOUTUBE_SEARCH_API+searchParams.get("q"));
      let json = await res.json();
      setSearchVideo(json.items)
  }

  return (
    <div className='m-2 p-2 ml-14'>
      {
        searchVideo?.map((video)=>{
          return <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}><SearchCard videoInfo = {video} /> </Link> 
        })
      }
    </div>
  )
}

export default SearchPage