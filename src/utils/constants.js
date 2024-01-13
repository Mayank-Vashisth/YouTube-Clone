const GOOGLE_API_KEY = "AIzaSyDwlLhqUoiCT1XgHqOVYRmtaXeo8r6gnpE";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key" +  GOOGLE_API_KEY;


//  export const COMMENT_API =
//   "https://youtube.googleapis.com/youtube/v3/comments?key=" + GOOGLE_API_KEY;

// Live Chat >>>> Infinite Scroll >>>>>> Pagination