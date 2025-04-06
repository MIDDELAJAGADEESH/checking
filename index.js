let print="hello world";
let htmlbody=document.querySelector("body");
htmlbody.append(print);

let newh1=document.createElement("h1");
newh1.className="heading";
newh1.innerHTML="This is heading";
htmlbody.appendChild(newh1);
let main=document.querySelector("main");



let gridsection=document.querySelectorAll(".section1,.section2,.section3");
main.addEventListener("mouseover",function(){
    gridsection.forEach(element => {
        element.classList.add("hoverd");
        
    });
})

main.addEventListener("mouseout",function(){
    gridsection.forEach(element=>{
        element.classList.remove("hoverd")
    })
})
