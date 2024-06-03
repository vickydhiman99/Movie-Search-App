


const Apidata=()=>{
fetch("https://www.omdbapi.com/?apikey=ba7a19ab&t=Game%20of%20Thrones&Season=1")
.then(res=>res.json())
.then(data=>console.log(data))
}
export default Apidata
