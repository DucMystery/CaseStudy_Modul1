function check5050(dem) {
    let index = 1;
    let listAnswer = [];
    let ramdom;
    if (alert("Bạn Muốn dùng trợ giúp 50/50 ?") === true) {
        for (let i = 1; i < 5; i++) {
            if (i === q[dem].correct)
                continue;
            listAnswer[index] = document.getElementById("answer" + i);
            index++;
            console.log(listAnswer[index]);
        }

        for (let i = 1; i < 3; i++) {
            ramdom = Math.floor(Math.random() * 4);
            if (ramdom > 0) {
                for (let j = 1; j < 5; j++) {
                    if (listAnswer[ramdom] === document.getElementById("answer" + j)) {
                        document.getElementById("answer" + j).value = "";
                        break;
                    }
                }
            }
            displayQuestion(dem);
        }
    }
}