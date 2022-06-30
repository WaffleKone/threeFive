function threeFive(startVal, endVal) {
    let currentVal = startVal;
    for(let i=startVal; i<=endVal; i++) {
        if(Number.isInteger(currentVal/3)&(Number.isInteger(currentVal/5))){
            console.log('threeFive')
        } else if (Number.isInteger(currentVal/3)) {
            console.log('three')
        } else if (Number.isInteger(currentVal/5)) {
            console.log('five')
        } else {
            console.log(currentVal)
        }
        currentVal++
    }
}

threeFive(1, 100)
