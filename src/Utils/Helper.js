import { YOUTUBE_BASE_URL } from "./const"

export const getYoutubePopularVideo = async ()=>{

   let res =  await fetch(YOUTUBE_BASE_URL);
   let data = await res.json();

   return data;

}