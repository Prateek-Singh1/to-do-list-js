const obj =JSON.parse(sessionStorage.getItem('Name'));
let length=obj.length;
sessionStorage.setItem("Length",length);
let index = JSON.parse(sessionStorage.getItem('cIndex'));
const input = document.querySelector("#input");

const addMore = () => {
    obj[index].arr.push(input.value);
    sessionStorage.setItem('Name',JSON.stringify(obj));
};





