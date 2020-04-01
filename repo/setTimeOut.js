
let timeOut;
let counter = 30;
function setTime(dem) {
    document.getElementById("s").innerHTML = counter + "";
    counter--;
    timeOut = setTimeout(setTime, 1000);
    if (counter === -1) {
        alert("Hết Giờ!");
        alert("Bạn dừng cuộc chơi ở câu " + level + " với số tiền là " + point + " VND");
        window.location.reload();
    }
}