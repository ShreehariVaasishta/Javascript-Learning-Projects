var bill = document.getElementById("bill-input");
var no_of_people = document.getElementById("no-of-people-val");
var total_amount_person = document.getElementById("total-amount-person");
var total_tip_amount_person = document.getElementById(
  "total-tip-amount-person"
);
var tip_percent;

function stringSlicify(text, length = 5) {
  return text.length > length ? `${text.slice(0, length)}...` : text;
}

function calculate_total_amount_per_person() {
  //   total_tip_amount_person.innerText = 123;

  if (typeof bill === "undefined") {
    bill_amt = 0;
  } else {
    bill_amt = parseInt(bill.value);
  }
  if (typeof no_of_people === "undefined") {
    no_of_people_amt = 0;
  } else {
    no_of_people_amt = parseInt(no_of_people.value);
  }
  if (typeof tip_percent === "undefined") {
    tip_percent_amt = 0;
  } else {
    tip_percent_amt = parseInt(tip_percent);
  }

  var tip_amount = bill_amt * (tip_percent_amt / 100);

  var total_amount_per_person = (bill_amt + tip_percent_amt) / no_of_people_amt;

  total_amount_person.innerText =
    "$" +
    stringSlicify(
      (total_amount_per_person ? total_amount_per_person : 0).toFixed(2)
    );
  total_tip_amount_person.innerText =
    "$" + stringSlicify((tip_amount ? tip_amount : 0).toFixed(2));
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
