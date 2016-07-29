// Time Conversion to military time given HH:MM:SS(PM/AM)


// Example:
// 07:54:32PM


// Output:
// 19:54:32

function main() {
    var time = readLine();
    var am = /AM/.test(time),
        pm = /PM/.test(time);
    
    if (am) {
        time = time.replace(/AM/,'');
        var timeArr = time.split(':');
        if (timeArr[0] == '12') {
            timeArr[0] = '00';
        }
        time = timeArr[0] + ':' + timeArr[1] + ':' + timeArr[2];
    } else if (pm) {
        time = time.replace(/PM/,'');
        var timeArr = time.split(':');
        if (timeArr[0] != '12') {
            realNumber = parseInt(timeArr[0]);
            timeArr[0] = (realNumber + 12).toString();
        }
        time = timeArr[0] + ':' + timeArr[1] + ':' + timeArr[2];} 
    console.log(time)
}
