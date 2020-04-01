let flag1 = false;

function khanGia(dem) {
    let index;
    let correct;
    correct = q[dem].correct;
    index = Math.random() ;
    console.log(Math.random());
    if (index <0.5) {
        for (let i = 1; i < 5; i++) {
            if (i === correct && flag1 === false) {
                pick(i);
                flag1 = true;
            }
        }

    } else if (index >= 0.5 && Math.random() < 1) {
        let i = Math.floor(Math.random() * 6);
        if (i !== correct && flag1 === false) {
            pick(i);
            flag1= true;
        }
    }
}