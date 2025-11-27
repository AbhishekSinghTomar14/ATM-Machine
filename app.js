

let depAmo = 0;


function deposite() {
    document.getElementById("main").style.display = "none";
    document.getElementById("depo").style.display = "block";
    document.getElementById("res").innerText = "";
}


function done() {
    let money = parseInt(document.getElementById("d").value);

    if (isNaN(money) || money <= 0) {
        alert("Enter a valid deposit amount!");
        return;
    }

    depAmo += money;

   
    document.getElementById("d").value = "";
    document.getElementById("d").placeholder = "Amount";

    
    document.getElementById("main").style.display = "block";
    document.getElementById("depo").style.display = "none";

    document.getElementById("res").innerText = 
        `Deposit Successful! Your Balance: ₹${depAmo}`;
}


function withdrawle() {
    document.getElementById("main").style.display = "none";
    document.getElementById("withdrawal").style.display = "block";
    document.getElementById("res").innerText = "";
}


function withdr() {
    let amount = parseInt(document.getElementById("w").value);

    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid withdrawal amount!");
        return;
    }

    if (amount > depAmo) {
        alert("Insufficient Balance!");
        return;
    }

    depAmo -= amount;

   
    document.getElementById("w").value = "";
    document.getElementById("withdrawal").style.display = "none";
    document.getElementById("main").style.display = "block";

    document.getElementById("res").innerText = 
        `Withdrawal Successful! Remaining Balance: ₹${depAmo}`;
}


function Balance() {
    document.getElementById("res").innerText = `Your Balance: ₹${depAmo}`;
}

function restart() {
    depAmo = 0;
    document.getElementById("res").innerText = "All Data Reset!";
}
