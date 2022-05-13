const about = (req, res) => {
  res.render("about", { title: "Blog | About" });
};

const contact = (req, res) => {
  res.render("contact", { title: "Blog | Contact" });
};

module.exports = {
  about,
  contact,
};
