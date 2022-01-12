$("#btnSend").click(function () {
    Grade = "og"
    finalPercentage = (parseInt($("#assignmentspercent").val()) * (.55) + parseInt($("#groupprojectspercent").val()) * (.05) + parseInt($("#quizzespercent").val()) * (.1) + parseInt($("#examspercent").val()) * (.2) + parseInt($("#intexpercent").val()) * (.1));
    if (finalPercentage >= 94)
        Grade = "A"
    else if (finalPercentage >= 90)
        Grade = "A-"
    else if (finalPercentage >= 87)
        Grade = "B+"
    else if (finalPercentage >= 84)
        Grade = "B"
    else if (finalPercentage >= 80)
        Grade = "B-"
    else if (finalPercentage >= 77)
        Grade = "C+"
    else if (finalPercentage >= 74)
        Grade = "C"
    else if (finalPercentage >= 70)
        Grade = "C-"
    else if (finalPercentage >= 67)
        Grade = "D+"
    else if (finalPercentage >= 64)
        Grade = "D"
    else if (finalPercentage >= 60)
        Grade = "D-"
    else if (finalPercentage < 60)
        Grade = "E"
    alert("Final Percentage: " + finalPercentage + " Letter Grade: " + Grade).tofixed(2);
    })