function Megszerkesztheto(){
    var egyikbefogo=document.getElementById("egyikbefogo").value;
    var masikbefogo=document.getElementById("masikbefogo").value;
    var atfogo=document.getElementById("atfogo").value;
    if(Math.pow(egyikbefogo, 2) + Math.pow(masikbefogo, 2) == Math.pow(atfogo, 2))
    {
        alert("A derékszögű háromszög megszerkeszthető!");
    }
    else
    {
        alert("A derékszögű háromszög NEM szerkeszthető meg!");
    }
}

function Veletlenoldalhosszak(){
    document.getElementById("egyikbefogo").value=Math.round(10+Math.random()*90);
    document.getElementById("masikbefogo").value=Math.round(10+Math.random()*90);
    document.getElementById("atfogo").value=Math.round(10+Math.random()*90);
}

function Atfogoszamitas(){
    var egyikbefogo=document.getElementById("egyikbefogo").value;
    var masikbefogo=document.getElementById("masikbefogo").value;
    document.getElementById("atfogo").value=Math.sqrt(Math.pow(egyikbefogo, 2) + Math.pow(masikbefogo, 2));
}