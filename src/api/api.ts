import axios from "axios"

export const getVideos = async(search:string)=>{

  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: search,
      part: 'snippet,id',
      regionCode: 'NG',
      maxResults: '10',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': 'f0df442e53mshd4e6466039e6ac4p1a6376jsn1434bc9c94dd',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
      localStorage.setItem("youtubeVideos", JSON.stringify(response.data))
    return response.data;
  } catch (error) {
    console.error(error);
  }
  }
  
  
  
  