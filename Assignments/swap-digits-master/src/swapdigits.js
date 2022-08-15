const swapDigits = (number) => {
    let swappedNumber = 0
    //write logic here

    if(number <= 0){
        return swappedNumber
    }

    else if (number.toString().length % 2 != 0) {
        //console.log("here")
        var n_odd = number.toString();
        var first_digit = n_odd[0]
        //console.log("First digit " + first_digit)
        n_odd = n_odd.slice(1,)
        //console.log(n_odd)
        parseInt(n_odd)

        var x = 1;

        while (n_odd != 0) {
            var dg1 = n_odd % 10,
                dg2 = (n_odd - dg1) / 10 % 10;
            swappedNumber += x * (10 * dg1 + dg2);
            n_odd = Math.floor(n_odd / 100);
            x *= 100;
        }

        swappedNumber = first_digit + swappedNumber
        return parseInt(swappedNumber)

    } else {

        var x = 1;

        while (number != 0) {
            var dg1 = number % 10, dg2 = (number - dg1) / 10 % 10;
            swappedNumber += x * (10 * dg1 + dg2);
            number = Math.floor(number / 100);
            x *= 100;
        }

        //console.log(swappedNumber)
        return swappedNumber
    }

    //return swappedNumber;

}

module.exports = swapDigits
