let flag = false;

function teleSupport(dem) {
    let index;
    let correct;
    correct = q[dem].correct;
    index = Math.random() ;
    console.log(Math.random());
    if (index <=0.5) {
        for (let i = 0; i < 4; i++) {
            if (i === correct && flag === false) {
                pick(i);
                flag = true;
            }
        }

    } else if (index>= 0.5 && index < 1) {
        let i = Math.floor((Math.random()) * 4);
        if (i !== correct && flag === false) {
            pick(i);
            flag = true;
        }
    }
}