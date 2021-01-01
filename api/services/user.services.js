"use strict";

exports.sortUsersPerPage = (users, page, perPage) => {
    var high;
    var low;
    var total_pages = Math.ceil(users.length / perPage);

    if (users.length > perPage) {
        high = page * perPage;
        low = ((page - 1) * perPage);
        return [total_pages, users.slice(low, high)];
    } else {
        high = users.length;
        low = 1;
        return [total_pages, users];
    }
}