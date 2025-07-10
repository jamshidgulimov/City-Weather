
const KEY = '8381bde3b01a162ed81d52c0f43bb07d'

const getData = async (city) =>{
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`   
      loader(true)
    const req = await fetch(base + query)
    const data = await req.json()
      loader(false)
    return data
}

