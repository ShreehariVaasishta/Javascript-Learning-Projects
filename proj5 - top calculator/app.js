var bill = document.getElementById("bill-input");
var no_of_people = document.getElementById("no-of-people-val");
var total_amount_person = document.getElementById("total-amount-person");
var total_tip_amount_person = document.getElementById(
  "total-tip-amount-person"
);
var tip_percent;

function calculate_total_amount_per_person() {
  //   total_tip_amount_person.innerText = 123;
  console.clear();

  if (typeof bill === "undefined") {
    bill_amt = 0;
  } else {
    bill_amt = parseInt(bill.value);
  }
  if (typeof no_of_people === "undefined") {
    no_of_people_amt = 0;
  } else {
    console.log(no_of_people.value, "<no_of_people");
    no_of_people_amt = parseInt(no_of_people.value);
  }
  if (typeof tip_percent === "undefined") {
    tip_percent_amt = 0;
  } else {
    tip_percent_amt = parseInt(tip_percent);
  }

  var tip_amount = bill_amt * (tip_percent_amt / 100);
  console.log(tip_percent_amt, "<<tip_percent_amt");
  console.log(bill_amt, "<<bill_amt");
  console.log(no_of_people, "<<no_of_people");

  var total_amount_per_person = (bill_amt + tip_percent_amt) / no_of_people_amt;

  total_amount_person.innerText =
    "$" + (total_amount_per_person ? total_amount_per_person : 0).toString();
  total_tip_amount_person.innerText =
    "$" + (tip_amount ? tip_amount : 0).toString();

  console.log("total_amount_person>>", total_amount_person.innerText);
  console.log("total_tip_amount_person>>>>", total_tip_amount_person.innerText);
}

bill.addEventListener("change", function () {
  calculate_total_amount_per_person();
});

no_of_people.addEventListener("change", function () {
  calculate_total_amount_per_person();
});

function getTipInput(e) {
  if (e.target.value) {
    tip_percent = e.target.value;
  } else if (e.value !== null) {
    tip_percent = e.value;
  } else {
    console.log(0);
  }
  calculate_total_amount_per_person();
}

function reset() {
  bill.value = "";
  no_of_people.value = "";
  total_amount_person.innerText = "$0.0";
  total_tip_amount_person.innerText = "$0.0";
}
