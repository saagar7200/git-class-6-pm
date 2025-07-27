// asynchronous programming
// 

// blocking 
// non-blocking

// console.log('start')
// console.log('processing')
// console.log('end')

// setTimeout

// setTimeout(callback,timer)

console.log('start')


setTimeout((y,z)=>{
    console.log(name,second,y)
    console.log('processing')
},3000,3,18)

const timerId = setTimeout(()=>{
    console.log('processing')
},3000)

// clearTimeout(timerId)

// console.log(timerId)

// ! setInterval
// ? setInterval(callback,timer)

count = 0
 const timer = setInterval(()=>{
    console.log(count++)

    if(count > 10){
        clearInterval(timer)
    }
},1000)



console.log('end')
// TODO:
// hr , min , sec 
// sec--
//  sec === 0 ? min-1, sec=59
// min===0 ,sec ===0 ? hr- 1 min = 59, sec = 59
// h===m===sec === 0 ? timer up


