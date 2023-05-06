import {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addPopularVideo } from '../Utils/AppSlice';
import { Link } from 'react-router-dom';

import { getYoutubePopularVideo } from '../Utils/Helper';


import VideoCard from './VideoCard';

function VideoContainer() {

  const dispatch = useDispatch();
  const popularVideos = useSelector(store=>store.app.popularVideos)

  useEffect( ()=>{
      getVideo()
  },[])

  const getVideo = async()=>{
    let data = await getYoutubePopularVideo()
    // console.log(data.items)
    dispatch(addPopularVideo(data?.items))
  }

  return (
    <div className='grid grid-cols-5 mt-3'>
      {
        popularVideos?.map((video)=>{
          return <Link key={video?.id} to={`/watch?v=${video?.id}`}><VideoCard  snippet={video?.snippet} statistics={video?.statistics} /></Link>
        })
      }
      
    </div>
  )
}

export default VideoContainer