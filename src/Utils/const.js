export const YOUTUBE_BASE_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_YT_KEY}`
export const YOUTUBE_SUGGEST_API = `https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=chrome&q=`
export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&key=${process.env.REACT_APP_YT_KEY}&q=`
export const YOUTUBE_LIVECHAT_OFFSET = 50