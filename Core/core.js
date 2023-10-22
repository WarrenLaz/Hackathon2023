console.log("established")

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function showDiv() {
    console.log("print")
    document.getElementById('abc').style.display = "block";
    document.getElementById('abc1').style.display = "none";
    
 }

 function showDiv2() {
    console.log("print")
    document.getElementById('abc1').style.display = "block";
    document.getElementById('abc').style.display = "none";

    
 }

 function generate(){
    x = makeid(6)
    console.log("hhhh")
    document.getElementById('code').innerHTML = x;
 }