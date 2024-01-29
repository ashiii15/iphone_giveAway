let endTime = document.querySelector('#endTime')
let remainingDays = document.querySelector('#days')
let remainingHours = document.querySelector('#hours')
let remainingMins = document.querySelector('#mins')
let remainingSecs = document.querySelector('#sec')
let txt = document.querySelector('#txt')

let giveAwayDayMilli = new Date('1/31/2024, 6:28:50 PM')
let x = setInterval(()=>{
let giveAwayTimeOrginalFormate = new Date(giveAwayDayMilli).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
const today = new Date().getTime()
let rDay = giveAwayDayMilli - today
// console.log(today);


endTime.innerHTML = giveAwayTimeOrginalFormate

     // days
let rDays = Math.floor((rDay)/(1000*60*60*24));
remainingDays.innerHTML =  `${rDays} days`

// hours
let rHours =  Math.floor((rDay%(1000*60*60*24))/(1000*60*60));
// console.log(rHours);
remainingHours.innerHTML = `${rHours} Hours`

//Minutes
let Rminutes =Math.floor((rDay%(1000*60*60))/(1000*60));
remainingMins.innerHTML =`${Rminutes} Minutes`

// seconds
let Rseconds = Math.floor((rDay%(1000*60))/1000)
remainingSecs.innerHTML = `${Rseconds} Seconds`

if(rDay < 0){
    clearInterval(x)
    txt.innerHTML = 'Exipred'
    
}
},1000)
    