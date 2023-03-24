const eng = document.getElementById("english");
const math = document.getElementById("maths");
const phy = document.getElementById("physics");
const chem = document.getElementById("chemistry");
const comp = document.getElementById("computer");
const button = document.getElementById("calculate");

const total = document.getElementById("total");
const average = document.getElementById("average");
const grade = document.getElementById("grade");

button.addEventListener("click" , calculate);

function calculate() {
    let e = parseInt(eng.value);
    let m = parseInt(math.value);
    let p = parseInt(phy.value);
    let c = parseInt(chem.value);
    let cs = parseInt(comp.value);

    let t = e+m+p+c+cs ;
    let a = parseFloat(t/5) ;
    let g ="X";
    
    if(a>=90){
        g = "A";
    }
    else if(a>=80){
        g = "B";
    }
    else if(a>=70){
        g = "C";
    }
    else if(a>=60){
        g = "D";
    }
    else{
        g="F";
    }
    
    if(e>100 || m>100 || p>100 || c>100 || cs>100){
        alert("Enter marks below 100");
    }
    else if(e<=35 || m<=35 || p<=35 || c<=35 || cs<=35){
        alert("Failed");
    }
    else{
        total.innerHTML = t;
        average.innerHTML = a;
        grade.innerHTML = g;
    }
}
