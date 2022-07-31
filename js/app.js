function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//คำนวณ BMI
function toBMI() {
  let BodyWeight = document.getElementById('numBodyWeight').value
  let Height = document.getElementById('numHeight').value
  let outputMeters = Height / 100
  let value = BodyWeight / (outputMeters ** 2);
  // console.log(value)
  if (BodyWeight == "" || Height == "") {
    alert("Please fill out the information completely!");
  } else if (value >= 40.0) {
    document.getElementById("result").innerHTML = "<b>" + "BMI = " + "</b>" + "<u>" + value.toFixed(2) + "</u>" + "<br>" + "<b>" + "Within the criteria : 40.0 or more: extreme obesity"
  } else if (value >= 35) {
    document.getElementById("result").innerHTML = "<b>" + "BMI = " + "</b>" + "<u>" + value.toFixed(2) + "</u>" + "<br>" + "<b>" + "Within the criteria : 35.0 - 39.9 : Obesity Level 2"
  } else if (value >= 28.5) {
    document.getElementById("result").innerHTML = "<b>" + "BMI = " + "</b>" + "<u>" + value.toFixed(2) + "</u>" + "<br>" + "<b>" + "Within the criteria : 28.5 - 34.9 : Obesity Level 1"
  } else if (value >= 23.5) {
    document.getElementById("result").innerHTML = "<b>" + "BMI = " + "</b>" + "<u>" + value.toFixed(2) + "</u>" + "<br>" + "<b>" + "Within the criteria : 23.5 - 28.4 : Overweight"
  } else if (value >= 18.5) {
    document.getElementById("result").innerHTML = "<b>" + "BMI = " + "</b>" + "<u>" + value.toFixed(2) + "</u>" + "<br>" + "<b>" + "Within the criteria : 18.5 - 23.4 : Normal weight"
  } else {
    document.getElementById("result").innerHTML = "<b>" + "BMI = " + "</b>" + "<u>" + value.toFixed(2) + "</u>" + "<br>" + "<b>" + "Within the criteria : Less than 18.5 : Too underweight"
  }
}
// จบ BMI


//คำนวณ BMR
function toBMR() {
  let Gender = document.getElementById('numGender').value;
  let BodyWeight = document.getElementById('numBodyWeight').value
  let Height = document.getElementById('numHeight').value
  let Age = document.getElementById('numAge').value
  let Activity = document.getElementById('numActivity').value;

  if (Gender == "Select" || BodyWeight == "" || Height == "" || Age == "" || Activity == "Select") {
    alert("Please fill out the information completely!");

  } else if (Gender == 1) {

    //คำนวณของผู้ชาย
    var value = 66 + (13.7 * BodyWeight) + (5 * Height) - (6.8 * Age);
    document.getElementById("totalBMR").innerHTML = "<b>" + "BMR (Basal Metabolic Rate) Energy that is essential for life = " + "</b>" + "<u>" + value.toFixed(2) + " kilocalories" + "</u>"
  } else {
    //คำนวณของผู้หญิง
    var value = 665 + (9.6 * BodyWeight) + (1.8 * Height) - (4.7 * Age);
    document.getElementById("totalBMR").innerHTML = "<b>" + "BMR (Basal Metabolic Rate) Energy that is essential for life = " + "</b>" + "<u>" + value.toFixed(2) + " kilocalories" + "</u>"
  }
  // console.log(Activity);
  // console.log(value);

  // คำนวณ TDEE
  let toTDEE = ""
  if (Activity == 1) {
    toTDEE = value * 1.2
    document.getElementById("result").innerHTML = "<b>" + "TDEE (Total Daily Energy Expenditure) = " + "</b>" + "<u>" + toTDEE.toFixed(2) + " kilocalories" + "</u>"
  } else if (Activity == 2) {
    toTDEE = value * 1.375
    document.getElementById("result").innerHTML = "<b>" + "TDEE (Total Daily Energy Expenditure) = " + "</b>" + "<u>" + toTDEE.toFixed(2) + " kilocalories" + "</u>"
  } else if (Activity == 3) {
    toTDEE = value * 1.55
    document.getElementById("result").innerHTML = "<b>" + "TDEE (Total Daily Energy Expenditure) = " + "</b>" + "<u>" + toTDEE.toFixed(2) + " kilocalories" + "</u>"
  } else if (Activity == 4) {
    toTDEE = value * 1.725
    document.getElementById("result").innerHTML = "<b>" + "TDEE (Total Daily Energy Expenditure) = " + "</b>" + "<u>" + toTDEE.toFixed(2) + " kilocalories" + "</u>"
  } else if (Activity == 5) {
    toTDEE = value * 1.9
    document.getElementById("result").innerHTML = "<b>" + "TDEE (Total Daily Energy Expenditure) = " + "</b>" + "<u>" + toTDEE.toFixed(2) + " kilocalories" + "</u>"
  }
  console.log(toTDEE)
}
// จบ BMR

// function cleartextbox
function ClearFieldsBMI() {
  document.getElementById("numBodyWeight").value = "";
  document.getElementById("numHeight").value = "";
  document.getElementById("toBMI").innerHTML = "";
  document.getElementById("result").innerHTML = "";
}

function ClearFieldsBMR() {
  document.getElementById("numBodyWeight").value = "";
  document.getElementById("numHeight").value = "";
  document.getElementById("numAge").value = "";
  document.getElementById("numGender").value = "Select";
  document.getElementById("totalBMR").innerHTML = "";
  document.getElementById("numActivity").value = "Select";
  document.getElementById("result").innerHTML = "";
}

