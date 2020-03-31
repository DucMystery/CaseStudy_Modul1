let answer = "";
let level = 1;
let point = 0;
let dem = 1;
let DA1 = document.getElementById("answer1");
let DA2 = document.getElementById("answer2");
let DA3 = document.getElementById("answer3");
let DA4 = document.getElementById("answer4");

function displayQuestion(dem) {
    let tableContent = "";

    tableContent = ' <tr width="800">\n' +
        '           <td colspan="2">\n' +
        '               <h3>Câu hỏi:</h3>\n' +
        '               <p>' + q[dem].question + '</p>\n' +
        '           </td>\n' +
        '       </tr> \n' +
        '       <tr width="800px">\n' +
        '           <label><td width="400px" id="td1" onclick="pick(1)"> <p id="answer1">' + q[dem].A + '</p></td></label>\n' +
        '           <label><td id="td2" width="400px" onclick="pick(2)"> <p id="answer2">' + q[dem].B + '</p></td></label>\n' +
        '       </tr>\n' +
        '       <tr width="800px">\n' +
        '           <label><td id="td3" width="400px" onclick="pick(3)"><p id="answer3"> ' + q[dem].C + '</p></td></label>\n' +
        '           <label><td id="td4" width="400px" onclick="pick(4)"><p id="answer4">' + q[dem].D + '</p></td></label>\n' +
        '       </tr>\n' +
        '       <tr width="800px">\n' +
        '           <td colspan="2" width="400px"><button style="background-color: red" type="button"onclick="check(' + dem + ')">Chốt Đáp Án</button></td>\n' +
        '       </tr>'
    document.getElementById("myTable").innerHTML = tableContent;
    document.getElementById("point").innerHTML = 'Point :' + point + 'VND';
    document.getElementById('level').innerHTML = 'Câu số :' + level;
}


function levelSamePoint() {
    switch (level) {
        case 2 :
            point = 200000;
            break;
        case 3:
            point = 400000;
            break;
        case 4:
            point = 800000;
            break;
        case 5:
            point = 1000000;
            break;
        case 6:
            point = 2000000;
            break;
        case 7:
            point = 3000000;
            break;
        case 8:
            point = 4000000;
            break;
        case 9:
            point = 6000000;
            break;
        case 10:
            point = 8000000;
            break;
        case 11:
            point = 10000000;
            break;
        case 12:
            point = 20000000;
            break;
        case 13:
            point = 40000000;
            break;
        case 14:
            point = 60000000;
            break;
        case 15:
            point = 80000000;
            break;
        case 16:
            point = 100000000;
            break;
    }
    document.getElementById("point").innerHTML = 'Point: ' + point;
    document.getElementById("level").innerHTML = 'Level: ' + level;
}

function pick(dem) {
    document.getElementById("td" + dem).style.backgroundColor = "yellow";
    answer = dem;
}

function check(dem) {
    console.log(q[dem].correct);
    console.log(answer);
    if (answer === q[dem].correct) {
        dem++;
        level++;
        levelSamePoint();
        displayQuestion(dem);
    } else {
        alert("Bạn dừng cuộc chơi ở câu " + level + " với số tiền là " + point + " VND");
        dem = 1;
        level = 1;
        point = 0;
        levelSamePoint();
        displayQuestion(dem);
    }
}


function check5050(dem) {
    let index = 0;
    for (let i = 0; i < q[dem].wrong.length - 1; i++) {
        index = Math.floor((Math.random() + 1) * 4);
        if (index === document.getElementById("answer" + index) && index !== q[dem].correct) {
            document.getElementById("answer" + index).value.splice(index, 1);
        }
    }
}

let flag = false;

function teleSupport(dem) {
    let index;
    let chinhxac;
    chinhxac = q[dem].correct;
    index = Math.floor(Math.random() * 5);
    if (Math.random() <0.5) {
        for (let i = 1; i < 5; i++) {
            if (i === chinhxac && flag === false) {
                pick(i);
                flag = true;
            }
        }

    } else if (Math.random() >= 0.5 && Math.random() < 1) {
        let i = Math.floor(Math.random() * 4);
        if (i !== chinhxac && flag === false) {
            pick(i);
            flag = true;
        }
    }
}





