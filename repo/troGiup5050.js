let flag2 = false;
function check5050() {
    let listAnswer = [];
    let index = 0;
    let correct = q[level].correct;

    for (let i=0;i<4;i++){
        if (i===correct)
            continue;
        listAnswer[index] = document.getElementById("answer"+i);
        index++;
        }

    for (let i=0;i<2;i++){
        for (let j=0;j<4;j++){
            if (listAnswer[i]===document.getElementById("answer"+j) && flag2 ===false){
                document.getElementById("answer"+j).style.display = "none";
                break;
            }
        }
    }

    flag2=true;
}