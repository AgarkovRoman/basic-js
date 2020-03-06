module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let dta = {
        turns: 0,
        seconds: 0,
    }
    dta.turns = Math.pow(2, disksNumber) - 1;
    dta.seconds = dta.turns / (turnsSpeed / 3600);

    return dta;
}