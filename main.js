const ampm = document.getElementById("ampm")
const cursor = document.getElementById("cursor")

function clock (){
    let Datetime = new Date()
    let hr = Datetime.getHours()
    let mni = Datetime.getMinutes()
    let sec = Datetime.getSeconds()

    if(hr>12){
        hr -=12
        ampm.innerHTML = 'PM'
    }

    document.getElementById("hr").innerHTML = zero(hr)
    document.getElementById("mni").innerHTML = zero(mni)
    document.getElementById("sec").innerHTML = zero(sec)
}

function zero(Time){
    return(Time<10 ? "0"+Time : Time)
}

setInterval(clock,5)


// setTimeout(cursor_cus, 4000)

// function cursor_cus(){
//     if(document.addEventListener(("mousemove"))){
//         cursor.style.cursor = "default"
//         console.log("hi")
//     }
    
//     else{cursor.style.cursor = "none"
//         console.log("by");
        
//     }
// }



