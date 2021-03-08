const banner = document.getElementsByClassName("banner")[0]
const blocks = document.getElementsByClassName("blocks")

//*複製出400個拼圖方塊+個別隨機時間產生
for(var i=1; i<400; i++){
    banner.innerHTML += "<div class='blocks'></div>"
    const duration = Math.random() * 5;
    blocks[i].style.animationDuration = 2 + duration+"s"
    blocks[i].style.animationDelay = duration+"s"
}

//*14秒後在section標籤後，增加"active"
const section = document.querySelector("section")
setTimeout(function(){
    section.classList.add("active")
},14000)