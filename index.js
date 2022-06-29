// module.exports = {
//     addnum: (num, addby) => {
//         const addition = num + addby;
//         return addition;
//     },
//     subnum: (num, subby) => {
//         const subtraction = num - subby;
//         return subtraction;
//     },

//     fs2rem: (option) => {
//         let elements = document.querySelector('.fs2rem');
//         elements.forEach(element => {
//             element.style.fontSize = '2rem';
//         })
//     }
// }

function fs2rem() {
    let elements = document.querySelector('.fs2rem');
    elements.forEach(element => {
        element.style.fontSize = '2rem';
    })
}

module.exports.basiccalculation = fs2rem;