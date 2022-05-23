const { navs } = require("../helpers/navGenerator");

const createInfo = (totalPosts, req) => {
    const info = {};

    info.totalPosts = totalPosts;
    info.page = 1;
    info.limit = 10;
    info.pages =
      info.totalPosts <= info.limit
        ? 1
        : Math.floor(info.totalPosts / info.limit) + 1;
    info.next = info.page == info.pages ? null : info.page + 1;
    info.prev = info.page == 1 ? null : info.page - 1;
    info.nav = navs(info.page, info.pages);
    info.tag = req.query.tag;


    return info
}


module.exports = {
    createInfo
}