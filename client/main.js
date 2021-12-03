const fortuneBtn = document.getElementById('fortune-button')
const kanyeBtn = document.getElementById('kanye-button')
const chuck = document.getElementById('chuck')
const advice = document.getElementById('advice')


const baseUrl = 'http://localhost:4000/api'

const getFortune = () => {
    axios.get(`${baseUrl}/fortune`)
        .then((response)=>{
            const data = response.data
            console.log(data)
            alert(data)
        })
}
fortuneBtn.addEventListener('click', getFortune)

const getKanye = () =>{
    axios.get('https://api.kanye.rest')
        .then((response)=>{
            let {quote} = response.data
            console.log(response.data)
            alert(quote)
        })
}
kanyeBtn.addEventListener('click',getKanye)

const getChuck = () => {
    axios.get('https://api.chucknorris.io/jokes/random')
        .then((response)=> {
            let {value} = response.data
            console.log(value)
            alert(value)
        })
}
chuck.addEventListener('click', getChuck)

const getAdvice = ()=> {
    axios.get('https://api.adviceslip.com/advice')
        .then((response)=> {
            let {slip} = response.data
            let {advice} = slip
            console.log(slip)
            alert(advice)
        })
}
advice.addEventListener('click', getAdvice)