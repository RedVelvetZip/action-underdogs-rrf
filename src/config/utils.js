function GetCurrentDate() {
    var months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    var n =  new Date();
    var y = n.getFullYear();
    var m = n.getMonth();
    var d = n.getDate();
    var currentdate = y + "-" + months[m] + "-" + d
    return currentdate
}
export default GetCurrentDate;