// fill in javascript code here
document.querySelector("form").addEventListener("submit",myfun);


function myfun(event){
    event.preventDefault();
var Name = document.querySelector("#name").value;
var Docid = document.querySelector("#docID").value;
var Dept = document.querySelector("#dept").value;
var Exp = document.querySelector("#exp").value;
var Email = document.querySelector("#email").value;
var Mobile = document.querySelector("#mbl").value;
var Role = ""

if(Exp<=1){
 Role = "Trainee"
}
else if(Exp<5){
    Role = "Junior"
}
else{
    Role = "Senior"
}

var tag1 = document.createElement("td")
tag1.innerText = Name;
var tag2 = document.createElement("td")
tag2.innerText = Docid;
var tag3 = document.createElement("td")
tag3.innerText = Dept;
var tag4 = document.createElement("td")
tag4.innerText = Exp;
var tag5 = document.createElement("td")
tag5.innerText = Email;
var tag6 = document.createElement("td")
tag6.innerText = Mobile;
var tag7 = document.createElement("td")
tag7.innerText = Role
var tag8 = document.createElement("td")
// tag8.setAttribute("id",)
tag8.innerText = "Delete"


const tr = document.createElement('tr');
tr.append(tag1)
tr.append(tag2)
tr.append(tag3)
tr.append(tag4)
tr.append(tag5)
tr.append(tag6)
tr.append(tag7)
tr.append(tag8)
tag8.addEventListener("click",del)
tag8.style.color = "red"
tag8.style.cursor = "pointer"
tr.style.color = "blue"

const tbody = document.querySelector("tbody")
tbody.append(tr) 





// document.querySelector("tr").append(tag1)
// document.querySelector("tr").append(tag2)
// document.querySelector("tr").append(tag3)
// document.querySelector("tr").append(tag4)
// document.querySelector("tr").append(tag5)
// document.querySelector("tr").append(tag6)




console.log(Name,Dept,Docid,Exp,Email,Mobile)


}
function del(){
    this.parentElement.remove()
}


