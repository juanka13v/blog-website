const home = (req, res) => {
  res.render("home");
};

const about = (req, res) => {
  res.render("about");
};

const contact = (req, res) => {
  res.render("contact");
};

const dashboard = (req, res) => {
  res.render("dashboard");
};

module.exports = {
  home,
  about,
  contact,
  dashboard
};