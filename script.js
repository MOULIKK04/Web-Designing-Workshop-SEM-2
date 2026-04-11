function createInputs(){

    let n = document.getElementById("subjects").value;
    let container = document.getElementById("marksContainer");

    container.innerHTML = "";

    for(let i=1;i<=n;i++)
    {
        container.innerHTML += 
        "Subject "+i+" Marks: <input type='number' id='m"+i+"'><br>";
    }
}

function calculateResult(){

    let n = document.getElementById("subjects").value;

    let total = 0;
    let fail = false;

    for(let i=1;i<=n;i++)
    {
        let marks = Number(document.getElementById("m"+i).value);

        if(marks < 33)
        fail = true;

        total += marks;
    }

    let avg = total/n;

    let grade;

    if(avg >= 90)
    grade = "A";

    else if(avg >= 75)
    grade = "B";

    else if(avg >= 60)
    grade = "C";

    else if(avg >= 50)
    grade = "D";

    else
    grade = "F";

    let status = fail ? "FAIL" : "PASS";

    document.getElementById("result").innerHTML =
    "Average : "+avg.toFixed(2)+"<br>Grade : "+grade+"<br>Status : "+status;

}