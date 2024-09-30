const balance = document.getElementById("balance");
const donatePageBtn = document.getElementById("donatePageBtn");
const historyPageBtn = document.getElementById("historyPageBtn");
const modal = document.getElementById("modal");
const historySection = document.getElementById("historySection");
const donationSection = document.getElementById("donationSection");
const donateBtns = document.querySelectorAll(".donateBtn");
const donateInputs = document.querySelectorAll(".donateInput");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const donatedAmountForFeni = document.querySelector(".donatedAmountForFeni");
const donatedAmountForQuota = document.querySelector(".donatedAmountForQuota");
const donatedAmountForNoakhali = document.querySelector(
  ".donatedAmountForNoakhali"
);

let totalBalance = 55000;

const pageBtns = [donatePageBtn, historyPageBtn];
modalCloseBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
pageBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    pageBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    if (btn.value === "donate") {
      historySection.classList.add("hidden");
      donationSection.classList.remove("hidden");
    } else {
      historySection.classList.remove("hidden");
      donationSection.classList.add("hidden");
    }
  });
});
let AmountForQuota = 3000,
  AmountForFeni = 1800,
  AmountForNoakhali = 2000;
donatedAmountForQuota.innerHTML = `${AmountForQuota} BDT`;
donatedAmountForFeni.innerHTML = `${AmountForFeni} BDT`;
donatedAmountForNoakhali.innerHTML = `${AmountForNoakhali} BDT`;

donateBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    donateInputs.forEach((input, index) => {
      if (input.value > 0) {
        totalBalance -= parseInt(input.value);
        balance.innerText = `${totalBalance} BDT`;
        modal.classList.remove("hidden");
        let newDate = new Date();
        const card = event.target.closest(".card");
        const cardTitle = card.querySelector("h3").textContent;
        let div = document.createElement("div");
        let p = document.createElement("p");
        let h2 = document.createElement("h2");
        div.classList.add("transection", "border", "rounded-xl", "p-6");
        p.classList.add("text-[#111111B2]");
        h2.classList.add("text-xl", "font-bold");
        p.innerText = `Date: ${newDate.toLocaleString()}`;
        h2.innerText = `${input.value} Taka is Donated for ${cardTitle}`;
        div.append(h2, p);
        historySection.prepend(div);
        if (index === 0) {
          AmountForNoakhali += parseInt(input.value);
          donatedAmountForNoakhali.innerText = `${AmountForNoakhali} BDT`;
        } else if (index === 1) {
          AmountForFeni += parseInt(input.value);
          donatedAmountForFeni.innerText = `${AmountForFeni} BDT`;
        } else if (index === 2) {
          AmountForQuota += parseInt(input.value);
          donatedAmountForQuota.innerText = `${AmountForQuota} BDT`;
        }
        input.value = "";
        setTimeout(() => {
          modal.classList.add("hidden");
        }, 5000);
      }
    });
  });
});

balance.innerText = `${totalBalance} BDT`; 
