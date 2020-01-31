(function teste(){


    var letterFist = document.getElementById('letterFist')
    var letterSec = document.getElementById('letterSec')
    var sendLetter =document.getElementById('sendLetter')
    let alphaValue = {}


    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']

    alphabet.forEach((char, index)=>{
        alphaValue[char] = index + 1
        alphaValue[char.toUpperCase()]= index + 27



        
    })

    console.log(alphaValue)

    var isPrime = (a , b) => {
        if(a % b === 0){
            return   console.log(`É primo`)
        }
        console.log('num é')


    }

    sendLetter.addEventListener('click', function(){

        alphabet.forEach((saysPrime) =>{

            if(saysPrime === letterSec.value){
                console.log(saysPrime[alphaValue])
            }

        })
        
        // console.log(letterFist.value)
        // console.log(letterSec.value)

    })
    



})()