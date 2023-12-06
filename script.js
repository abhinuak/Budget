function tologin(){
    inner.innerHTML =`
    <div class="row w-100 mt-5 ">
    <div class="col-1"></div>
    <div class="border bord1 border-5 border-warning rounded-5 pt-5 pb-2">
        <p class="log">Login</p>
        <input class="user form-control border border-primary w-75 mt-1 ms-5" id="username" placeholder="Username" type="text">
        <input class="user form-control border border-primary w-75 mt-4 ms-5" id="password" placeholder="Password" type="text">
        <button class="btn btn-primary w-75 mt-3 ms-5" onclick="login()">Login</button>
        <button class="btn text-success w-75 mt-3 ms-5" onclick="toregister()">Create new Account</button>
    </div>
    <div class="col-1"></div>
</div>`
inner1.innerHTML=`<img class="savimg" src="https://assets.materialup.com/uploads/083260f1-7f97-4355-bc34-aef89827b8fb/preview.gif" alt="">
`
}
function toregister(){
    inner1.innerHTML = `<div class="row w-100 mt-5 ms-2">
    <div class="col-1"></div>
    <div class="border bord2 border-5 border-warning rounded-5 pt-2 pb-2" >
        <p class="reg">Register</p>
        <input class="user form-control border border-success w-75 mt-1 ms-5" id="user" placeholder="Username" type="text">
        <input class="user form-control border border-success w-75 mt-3 ms-5" id="pass" placeholder="Password" type="password">
        <input class="user form-control border border-success w-75 mt-3 ms-5" id="pass1" placeholder="Re-enter password" type="password">
        <button class="btn btn-success w-75 mt-3 ms-5 mb-3" onclick="register()">Register</button>
    </div>
    <div class="col-1"></div>
</div>`
inner.innerHTML=`<img class="savimg1" src="https://assets.materialup.com/uploads/87e8c416-7298-47e7-9c4b-e218def6e9d8/animated_teaser.gif" alt="">

`
}
function register() {
    const user = document.getElementById("user");
    const password = document.getElementById("pass");
    const repass = document.getElementById("pass1");
    if(password.value==repass.value){
        const registerData = {
            username: user.value,
            password:password.value
        }
        if(registerData.user==""||registerData.password==""){
            alert("Fill all the feilds");
        }
        else{
            if(registerData.user in localStorage){
                alert("Already  registered");
            }
            else{
                localStorage.setItem(registerData.username,JSON.stringify(registerData));
                alert("Regestered successfully");
                inner.innerHTML =`
                <div class="row w-100 mt-5">
                <div class="col-1"></div>
                <div class="border bord1 border-2 border-info rounded pt-5 pb-2">
                    <p class="log">login</p>
                    <input class="user form-control border border-primary w-75 mt-1 ms-5" id="username" placeholder="Username" type="text">
                    <input class="user form-control border border-primary w-75 mt-4 ms-5" id="password" placeholder="Password" type="text">
                    <button class="btn btn-primary w-75 mt-3 ms-5" onclick="login()">Login</button>
                    <button class="btn text-success w-75 mt-3 ms-5" onclick="toregister()">Create new Account</button>
                    </div>
                <div class="col-1"></div>
            </div>`
            inner1.innerHTML=` <img class="savimg" src="https://www.daniaaccounting.com/wp-content/uploads/2022/09/Budget.jpg?x82588" alt="">`

            
            }
        }
    }
    else{
        alert("Incorrect Password");
    }
}

function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username==""||password==""){
        alert("Fill all the fields");
    }
    else{
        if(username in localStorage){
            const loginData=JSON.parse(localStorage.getItem(username));
            if(loginData.password==password){
                alert("logged in successfully");
                window.location='./home.html'
            }
            else{
                alert("Check your Password")
            }
        }
        else{
            alert("Check Your Username")
        }
    }


}


function logout(){
    window.location ="./index.html"
}


function enterBudget(){
    const budget = document.getElementById("budget").value;
    inner1.innerHTML =`<div class="budg">
                            <p>${budget}</p>
                        <div>`
    
}

let expense_record =[];
var exp=0;

function enterData(date='N/A',event='N/A', amount='N/A') {
    const budget = document.getElementById("budget").value;
    var date = document.getElementById("date").value;
    console.log(date);
    var event = document.getElementById("event").value;
    console.log(event);
    var amount = document.getElementById("amount").value;
    console.log(amount);

    if(date==""||event==""||amount==""){
        alert("Please fill all feilds");
    }
    else{
      exp = Number(exp)+Number(amount);
      inner2.innerHTML =`<div class="bu">
      <p>${exp}</p>
      <div>`
      bala = Number(budget)-exp;
      inner3.innerHTML =`<div class="bu">
      <p>${bala}</p>
      <div>`
      tot.innerHTML = `<div>Total Amount: ${exp}</div>`
      expense_record.push({date,event,amount})
      renderTable();
       }
    }
    

  function renderTable(){
    if(expense_record.length==1){
        expense_record.forEach((expense)=>{
            table_style.innerHTML+=`<tr >
                <td>${expense.date}</td>
                <td>${expense.event}</td>
                <td>${expense.amount}</td>
            </tr>`
        });
    }
    else{
        expense_record.reduceRight((expense)=>{
            table_style.innerHTML+=`<tr >
                <td>${expense.date}</td>
                <td>${expense.event}</td>
                <td>${expense.amount}</td>
            </tr>`
        });
    }
}
