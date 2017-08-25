var obj = function () {
    var tscore = 90;
    if (tscore >= 80) {
        grade = "A";
    } else if (tscore >= 70) {
        grade = "B";
    } else if (tscore >= 60) {
        grade = "C";
    } else if (tscore >= 50) {
        grade = "D";
    } else {
        grade = "F"
    }
    return grade;
}
exports.obj = obj;
