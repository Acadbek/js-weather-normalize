const api = {
    key: '14c12046118a3fe1041892a31e4fed2e',
    baseURL: 'https://api.openweathermap.org/data/2.5/',
}

const search = document.querySelector('.search');
search.addEventListener('keypress', setQuery);

function setQuery(e) {
    if (e.keyCode = 13) {
        getResults(search.value);
        // console.log(search.value); 
    }
}

function getResults(quaerty) {
    fetch(`${api.baseURL}weather?q=${quaerty}&APPID=${api.key}&units=metric`)
        .then(weather => {
            return weather.json();
        })
        .then(displayResults);
}

function displayResults(weather) {
    console.log(weather);
    const city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;
    let now = new Date();
    const date = document.querySelector('.location .date'); 
    date.innerHTML = dateBuilder(now);

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp) + `°C`}`;

    let weather_el = document.querySelector('.weather');
    weather_el.innerHTML = `${weather.weather[0].main}`;
    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${Math.round(weather.main.temp_min) + `°C / ${Math.round(weather.main.temp_max) + `°C`}`}`;
}


function dateBuilder(d) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()]
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}


























// let arr = [4, 5, 6, 7, 8, 9, 10];
// arr.forEach((element) => {
//     console.log(Math.max(element));
// })

// console.log(Math.max(4,5,1,53)); // logs 5

// var arr = [3, 6, 2, 56, 32, 5, 89, 32];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// console.log(largest);

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let larg = array[0];

// array.forEach(function(element) {
//     if (larg < element) {
//         larg = element;
//     }
// })
// console.log(larg);

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let largestt = array[0];

// array.forEach(function(element) {
//     if(largestt < element) {
//         largestt = element;
//     }
// })

// console.log(largestt);

// let user = [];
// for (let i = 0; i < 5; i++) {
//     // let names = prompt("What is your name?");
//     user.push(names);
// }

// user.forEach(n => {
//     console.log(n);
// })

// let arr = [11, 2, 3, 4, 5, 6, 7, 8, 9, 102];
// largest = arr[0];
// k = arr[0];
// for(let i = 0; i < arr.length; i++) {
//     if(largest < arr[i]) {
//         largest = arr[i];
//     }
//     else if(k > arr[i]) {
//         k = arr[i];
//     }
// }

// console.log(`eng kattasi ${largest}, eng kichigi ${k}`);

// let arr = [11, 5, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15];
// let largest = 10;

// arr.forEach(element => {
//     if(largest < element) {
//         largest = element;
//     }
// })
// console.log(largest);

// let arr = [31, 35, 33, 34, 35, 36, 37, 38, 39, 20, 22, 23, 24, 25];
// arr.reduce((a, b) => {
//     console.log(a + b);
// })

// console.log(
//     [1, 1, 1, 1, 1, 5].reduce((a, b) => a + b, 0)
// )
// let arr = [1, 1, 1, 1, 1, 5];

// let listOfValues = [1, 3, 4, 9, 3, 5, 2, 10, 20];
// let total = 0;
// for (let index = 0; index < listOfValues.length; index++) {
//     total = total + listOfValues[index];
// }
// console.log("Total Values = " + total);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let tota = 0;
// for (let index = 0; index < arr.length; index++) {
//     tota = tota + arr[index];
// }
// console.log(tota)

// let arr2 = [3, 4, 5, 6, 7, 8, 9, 10];
// let total2 = 0;
// for(let index = 0; index < arr2.length; index++) {
//     total2 = total2 + arr2[index]
// }
// console.log(total2)


// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let total3 = 0;
// for (let index = 0; index < arr3.length; index++) {
//     total3 = total3 + arr3[index]
// }
// console.log(total3)

// users = [
//     {
//         name: "John",
//         age: 2
//     },
//     {
//         name: "John",
//         age: 30
//     },
//     {
//         name: "John",
//         age: 24
//     },
//     {
//         name: "John",
//         age: 23
//     },
//     {
//         name: "B",
//         age: 20
//     },
//     {
//         name: "A",
//         age: 20
//     },
//     {
//         name: "C",
//         age: 20
//     }, {
//         name: "John",
//         age: 14
//     }, {
//         name: "D",
//         age: 20
//     }, {
//         name: "John",
//         age: 13
//     },
// ];

// fetch("https://jsonplaceholder.typicode.com/users/")
//     .then(response => response.json())
//     .then(data => {
//         data.sort(function (a, b) {
//             return a.length - b.length
//         })
//         console.log(data[0]);
//     })

//     fetch('https://jsonplaceholder.typicode.com/posts/', {
//         method: 'POST',
//         body: JSON.stringify({'content': 'foo', 'userId': 1}),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     });


// for(let index = 0; index < users.length; index++) {
//     if(users[index].age == 20) {
//         console.log(users[index].name);
//     }
// }

// let elements = ['A', 'Javascript', 'Css', 'B', 'A', 'Html'];
// elements.sort(function (a, b) {
//   return a.length - b.length;
// });
// console.log(elements);