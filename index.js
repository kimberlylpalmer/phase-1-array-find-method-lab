// code your solution here
// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
//   ]
// superbowlWin(record)


//

function superbowlWin(arr){
    const winning = arr.find((obj) => {
        if (obj.result === "W") {
            return obj.year
        } 
    }) 
    console.log(winning) 
    if (winning) {
        return winning.year
    } else {
        return undefined
    }   
}

// const superbowlWin = (record) => {
//     const winYear = record.find(({ result }) => result === "W");
//     return winYear ? winYear.year : undefined;
//   };
