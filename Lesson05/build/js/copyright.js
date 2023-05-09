"use strict";
// Original JS code
// const year = document.getElementById('year')
// const thisYear = new Date().getFullYear()
// year.setAttribute('datetime', thisYear)
// year.textContent = thisYear
// // 1st Variation:
// let year: HTMLElement | null //for double assignment use let instead of const
// year = document.getElementById('year')
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if (year) {
//     year.setAttribute('datetime', thisYear)
//     year.textContent = thisYear
// }
// 2nd Variation:
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
