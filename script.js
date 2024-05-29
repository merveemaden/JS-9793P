const upgrade =document.getElementById ("upgrade");
const drop =document.getElementById ("drop");
const reset =document.getElementById ("reset");
const changeNumber =document.getElementById ("changeNumber");
let count=0;

upgrade.onclick=function() {
    count++;
    changeNumber.textContent =count;
}
upgrade.onclick=function() {
    count++;
    changeNumber.textContent =count;
}
drop.onclick=function() {
    count--;
    changeNumber.textContent =count;
    
}
   
reset.onclick=function() {
    count =0;
    changeNumber.textContent =count;
}