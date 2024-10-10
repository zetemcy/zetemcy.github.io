var color = ['red','green','blue','purple','yellow','black'];
//----> FUNTION (){}  

// --------NOMBRE--------
function listArray(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(i, arr[i])        
    }
}
// listArray(color);

// -------------------PARAMETROS------
function letterFinder(word,match) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match , 'at', i)    
        } else {
            console.log('No match found at', i)
        }
    }
}

// -ACTIVAR- <---------
letterFinder('test', 't')
// ---------- PARAMETROS