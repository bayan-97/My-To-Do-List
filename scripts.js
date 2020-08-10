var allTasks=[]
var allTaskesRead;
var tit=[" Task","Date","Urgency","Done"]
function Tasks(task1,date1,urgency1) {
    this.task1=task1
    this.date1=date1
    this.urgency1=urgency1
    
allTasks.push(this)
    
}
var tableList=document.getElementById("tablelist")
var table=document.createElement("table")
tableList.appendChild(table)
var tr1=document.createElement("tr")
for (let index = 0; index < tit.length; index++) {
   var td1=document.createElement("td")
   td1.textContent=tit[index]
  tr1.appendChild(td1)
}
table.appendChild(tr1)
if (localStorage.getItem("taskI") !==null ) {
    //  allTaskesRead=JSON.parse(localStorage.getItem("taskI"))
    //  console.log(allTaskesRead);
    for (let index = 0; index < allTaskesRead.length; index++) {
       
      allTaskesRead [index].render()
    } 
}

Tasks.prototype.render=function () {
for (let index = 0; index < allTasks.length; index++) {
    var tr2=document.createElement("tr")
    // table.appendChild(tr2)
    var td2=document.createElement("td")
    td2.textContent=this.task1
    tr2.appendChild(td2)
    var td3=document.createElement("td")
    td3.textContent=this.date1
    tr2.appendChild(td3)
    var td4=document.createElement("td")
    td4.textContent=this.urgency1
    tr2.appendChild(td4)
    var td5=document.createElement("td")
var a=document.createElement("a")
td5.appendChild(a)
a.textContent="X"
// a.setAttribute("href",)
    tr2.appendChild(td5)
    
}
table.appendChild(tr2)

    

    
}
var formlist=document.getElementById("formlist")
formlist.addEventListener("submit",tableCreate)

function tableCreate() {
    event.preventDefault()
    var taskN=event.target.task.value
    var dateN=event.target.date.value
    var urgencyn=event.target.urgency.value
    
    var newTaskes=new Tasks(taskN,dateN,urgencyn)
    newTaskes.render()
    storeObject()
}

function storeObject() {
    var stringfyO=JSON.stringify(allTasks)
    localStorage.setItem("taskI",stringfyO)
   
    
}
parseO() 
function parseO() {
    var allTaskesRead=JSON.parse(localStorage.getItem("taskI"))
    
    updateo(allTaskesRead)
    
}
function updateo(allTaskesRead) {
    allTasks=allTaskesRead
    
}
