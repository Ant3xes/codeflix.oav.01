module.exports = function getFileName(fileName) {
    const date = new Date();

    const year = date.getFullYear()
    let month = date.getMonth();
    let day = date.getDate()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if(month < 10) {
        month = "0" + month
    }
    if(day < 10) {
        day = "0" + day
    }
    if(hour < 10) {
        hour = "0" + hour
    }
    if(minutes < 10) {
        minutes = "0" + minutes
    }
    if(seconds < 10) {
        seconds = "0" + seconds
    }
    const dateNameFile = year + "" + month + "" + day + "" + hour + "" + minutes + "" + seconds
    if(fileName == ".env") {
        return "env." + dateNameFile + ".json";
    } else {
        return "php." + dateNameFile + ".json";
    }
}