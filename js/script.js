(function teste(){


    var firstChar = document.getElementById('firstChar')
    var secChar = document.getElementById('secChar')
    var sendLetter =document.getElementById('sendLetter')
    let alphaValue = {}


    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    alphabet.forEach((char, index)=>{
        alphaValue[char] = index + 1
        alphaValue[char.toUpperCase()]= index + alphabet.length + 1
    })

    console.log(alphaValue)

    var isPrime = (a , b) => {
        if(alphaValue[a] % alphaValue[b] === 0){
            return   console.log(`É primo`)
        }
        console.log('num é')
    }

    sendLetter.addEventListener('click', function(){
        var firstCharValue = firstChar.value
        var secCharValue = secChar.value
        isPrime(firstCharValue, secCharValue)
    })
    



})()