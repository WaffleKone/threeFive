function threeFive(startVal, endVal) {
    let currentVal = startVal;
    console.time("tresCinco")
    for(let i=startVal; i<=endVal; i++) {
        if (currentVal % 3 && currentVal % 5) {
            console.log(currentVal)
        } else if (currentVal % 3) {
            console.log('five')
        } else if (currentVal % 5) {
            console.log('three')
        } else {
            console.log('threefive')
        }
        currentVal++
    }
    console.timeEnd("tresCinco")
}

threeFive(1, 100)


