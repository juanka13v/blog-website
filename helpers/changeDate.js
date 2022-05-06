
function formatDate(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  var d = new Date(date),
    month = "" + (months[d.getMonth()]),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (day.length < 2) day = "0" + day;

  return `${month} ${day}, ${year}`;
}


module.exports = {
  formatDate,
};
