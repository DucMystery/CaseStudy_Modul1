let answer = "";
let level = 1;
let point = 0;
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
        '           <label><td width="400px" id="td0" onclick="pick(0)"> <p id="answer0">' + q[dem].A + '</p></td></label>\n' +
        '           <label><td id="td1" width="400px" onclick="pick(1)"> <p id="answer1">' + q[dem].B + '</p></td></label>\n' +
        '       </tr>\n' +
        '       <tr width="800px">\n' +
        '           <label><td id="td2" width="400px" onclick="pick(2)"><p id="answer2"> ' + q[dem].C + '</p></td></label>\n' +
        '           <label><td id="td3" width="400px" onclick="pick(3)"><p id="answer3">' + q[dem].D + '</p></td></label>\n' +
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
    if (document.getElementById("td"+dem).style.backgroundColor="yellow"){
        for (let i=0;i<4;i++){
            if (i===dem)
                continue;
            document.getElementById("td"+i).style.backgroundColor ="royalblue";
        }
    }
    answer = dem;
}

function check(dem) {
    console.log(q[dem].correct);
    console.log(answer);
    if (answer === q[dem].correct) {
        dem++;
        level++;
        counter =30;
        levelSamePoint();
        displayQuestion(dem);
    } else {
        alert("Bạn dừng cuộc chơi ở câu " + level + " với số tiền là " + point + " VND");
        dem = 1;
        level = 1;
        point = 0;
        counter = 30;
        levelSamePoint();
        displayQuestion(dem);

    }
}






