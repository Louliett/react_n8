"use strict";

//IMPORTANT
// if(items.length>9){
//     const high=currentPage*9
//     const low=((currentPage-1)*9)
//     setCurrentPageItems(items.slice(low,high))
// }else{
//     const high=items.length
//     const low=1
//     setCurrentPageItems(items)
// }
// Current page = request page
// items=users
// 9 = perPage
// If perPage < users.loength

exports.sortUsersPerPage = (users, page, perPage) => {
    var high;
    var low;
    if (users.length > perPage) {
        high = page * perPage;
        low = ((page - 1) * perPage);
        return users.slice(low, high);
    } else {
        high = users.length;
        low = 1;
        return users;
    }
}

// exports.sortUsersPerPage = (users, page, perPage) => {
//     console.log('-----------------------------------');
//     var users_per_page = [[]];
//     var user_stack = [];
//     var counter = 0;
//     //var remainder = [];

//     for (let i = 0; i < users.length; i++) {
//         // if (remainder.length === 1) {
//         //     user_stack.push(remainder[0]);
//         //     remainder = [];
//         //     console.log('remainder after ', remainder.length);
//         // }
//         counter++;
//         //console.log(counter, ' is smaller or equal than ' + perPage + ' ' + ' ' + (counter <= perPage));
//         if (counter < perPage) {
//             user_stack.push(users[i]);
//         } else {
//             //remainder.push(users[i]);
//             users_per_page.push(user_stack);
//             //console.log('Its false so length is: ', users_per_page.length);
//             user_stack = [];
//             counter = 0;
//         }
//         //console.log('ITERATION ' + i + ' ENDS.');
//     }
//     console.log(users_per_page, ' per page');
//     return users_per_page[page];
// }