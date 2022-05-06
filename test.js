const { formatDate } = require("./helpers/changeDate");

const posts = [
  {
    _id: "627517db7c7ec116122266e6",
    title: "blog 1",
    description: "this is a description 1",
    markdown: "### Title 1",
    min: 5,
    author: "6273d927cc1a2ab8eafb1226",
    category: "Sports",
    tags: ["messi", "river"],
    createdAt: "2022-05-06T03:00:00.000Z",
    __v: 0,
  },
  {
    _id: "627517db7c7ec116122266e7",
    title: "blog 2",
    description: "this is a description 1 lore im i am yhe best",
    markdown: "### Title 1",
    min: 8,
    author: "6273d927cc1a2ab8eafb1226",
    category: "Sports",
    tags: ["riquelme", "boca"],
    createdAt: "2022-05-06T03:00:00.000Z",
    __v: 0,
  },
  {
    _id: "627517db7c7ec116122266e8",
    title: "blog 3",
    description: "help i need somebody this is a description 1",
    markdown: "### Title 4",
    min: 3,
    author: "6273d927cc1a2ab8eafb1226",
    category: "Sports",
    tags: ["libertadores", "river"],
    createdAt: "2022-05-06T03:00:00.000Z",
    __v: 0,
  },
  {
    _id: "627517db7c7ec116122266e9",
    title: "blog 4",
    description: "my name is not this is a description 1",
    markdown: "### Title 8",
    min: 6,
    author: "6273d935cc1a2ab8eafb1228",
    category: "Finance",
    tags: ["euro", "dolar"],
    createdAt: "2022-05-06T03:00:00.000Z",
    __v: 0,
  },
];


posts.forEach(item => {
    item.createdAt = formatDate(item.createdAt)
    console.log(item.createdAt);
})

console.log(posts); 