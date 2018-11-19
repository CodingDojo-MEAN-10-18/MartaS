function fib() {
    let first_num = 0
    let second_num = 1
    let newNum;
    function nacci() {
        let newNum = first_num;
        first_num = second_num;
        second_num += newNum;
        console.log(second_num)
        }
        return nacci;
  }

var fibCounter = fib();

fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
