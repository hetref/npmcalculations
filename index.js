module.exports = {
    addnum: (num, addby) => {
        const addition = num + addby;
        return addition;
    },
    subnum: (num, subby) => {
        const subtraction = num - subby;
        return subtraction;
    },
    fs2remid: (element) => {
        document.getElementById(element).style.fontSize = '2rem';
    },
    fs2remclass: (element) => {
        document.getElementsByClassName(element).style.fontSize = '2rem';
    }
}