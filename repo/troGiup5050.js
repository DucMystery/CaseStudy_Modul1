function check5050(dem) {
    let index = 0;
    let listAnswer = [];
    let wrongListAnswer = [];

    let random;
    if (alert("Bạn Muốn dùng trợ giúp 50/50 ?") === true) {
        for (let i = 1; i < 5; i++) {
            if (i === q[dem].correct) {
                return wrongListAnswer = listAnswer.splice(i, 1);
            }
        }
        for (let i = 0; i < 2; i++) {
            for (let j = 1; j <= wrongListAnswer.length; j++) {
                random = Math.floor(Math.random() * wrongListAnswer.length);
                if (listAnswer[random] === document.getElementById("answer" + j)) {
                    document.getElementById("answer" + j).value = "";
                    listAnswer.splice(random,1);
                    break;
                }
            }
        }
    }
}