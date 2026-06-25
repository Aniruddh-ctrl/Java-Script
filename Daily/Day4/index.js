function change() {
    let ele = document.getElementsByTagName("h1");
    ele[0].innerText = "Hello INDIA";
    let ele1 = document.getElementById("para");
    ele1.innerText = "This is a paragraph.";    
    
    let ele2 = document.getElementsByClassName("para1");
    ele2[0].innerText = "This is another paragraph.";
    ele1.style.backgroundColor = "yellow";
    ele2[0].style.backgroundColor = "lightgray";
    
let card = document.getElementById("card");
Object.assign(card.style, {
  width: "300px", height: "200px", border: "1px solid black", });
card.onclick = () => Object.assign(card.style, {
  backgroundImage: "url('https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg')",
    backgroundSize: "cover", backgroundPosition: "center",
});
 
let card1 = document.getElementById("card1");

Object.assign(card1.style, {
  width: "300px", height: "200px", border: "1px solid black", });

card1.onclick = () => Object.assign(card1.style, {
  width: "200px", height: "300px", background: "lightblue"
});

}

function clock() {
    let ele = document.getElementById("clock");
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = `${hours}:${minutes}:${seconds}`;

    setTimeout(clock, 1000);
    ele.innerText = time;
}
clock();