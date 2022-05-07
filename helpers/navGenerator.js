const navs = (page, pages) => {
  let array = [];

  if (pages < 6) {
    for (let i = 1; i < pages + 1; i++) {
      array.push(i);
    }
    return array;
  }

  if (page <= 2) {
    for (let i = 1; i < 6; i++) {
      array.push(i);
    }
    return array;
  }

  if (page > 2 && pages > 5) {
    if (page == pages) {
      for (let i = page - 4; i < page + 1; i++) {
        array.push(i);
      }
      return array;
    }

    if (page + 2 == pages) {
      for (let i = page - 2; i < page + 3; i++) {
        array.push(i);
      }
      return array;
    }

    if (page + 1 == pages) {
      for (let i = page - 3; i < page + 2; i++) {
        array.push(i);
      }
      return array;
    }
    for (let i = page - 2; i < page + 3; i++) {
      array.push(i);
    }
    return array;
  }
};

module.exports = {
  navs,
};
