function myAdd() {

    let first = Number(document.getElementById("firstnum").value);

    let second = Number(document.getElementById("secondnum").value);

    let result = first + second;

    document.getElementById("output").innerHTML = `<h3>${result}</h3>`;
}

function mySub() {

    let first = Number(document.getElementById("firstnum").value);

    let second = Number(document.getElementById("secondnum").value);

    let result = first - second;

    document.getElementById("output").innerHTML = `<h3>${result}</h3>`;
}

function myMul() {

    let first = Number(document.getElementById("firstnum").value);

    let second = Number(document.getElementById("secondnum").value);

    let result = first * second;

    document.getElementById("output").innerHTML = `<h3>${result}</h3>`;
}

function myDiv() {

    let first = Number(document.getElementById("firstnum").value);

    let second = Number(document.getElementById("secondnum").value);

    if (second === 0) {
        document.getElementById("output").innerHTML = `<h3 style="color:red">Can't divide by Zero!</h3>`;
        return;
    }

    let result = first / second;

    document.getElementById("output").innerHTML = `<h3>${result}</h3>`;
}

function myPow() {

    let first = Number(document.getElementById("firstnum").value);

    let second = Number(document.getElementById("secondnum").value);

    let result = 1;

    for (let i = 0; i < second; i++) {
        result = result * first;
    }
    document.getElementById("output").innerHTML = `<h3>${result}</h3>`;
}

function myMod() {

    let first = Number(document.getElementById("firstnum").value);

    let second = Number(document.getElementById("secondnum").value);

    let result = first % second;

    document.getElementById("output").innerHTML = `<h3>${result}</h3>`;
}

function clearCalc() {

    document.getElementById("firstnum").value = "";

    document.getElementById("secondnum").value = "";

    document.getElementById("output").innerHTML = "";
}
