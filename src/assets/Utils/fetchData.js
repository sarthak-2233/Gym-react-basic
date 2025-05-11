export const exerciseOption={
 method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'x-rapidapi-key': '6e118ad191mshdcfd3056db45a18p1b7321jsn4a5c8c102652',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};



export const fetchData=async (url,options)=>{
    const response =await fetch(url,options)
    const data=await response.json()
    return data;
}