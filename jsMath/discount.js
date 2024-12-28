const btn = document.querySelector("#calculate");
const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calcPriceAndDiscount);

// const arrayUObject = undefined;

// const couponObj = {
//   "Loyalty Coupon": 30,
//   "Member Coupon": 20,
//   "Welcome Coupon": 10,
// };

const couponList = [];
couponList.push({
  name: "Bryan",
  discount: 30,
});

function calcPriceAndDiscount() {
  const price = Number(inputPrice.value);
  const coupon = Number(inputCoupon.value);

  if (!price || !coupon) {
    pResult.innerText = "Please fill the blanks";
    return;
  }

  let discount;

  // if (couponObj[coupon]) {
  //   discount = couponObj[coupon];
  // } else {
  //   pResult.innerText = "Invalid coupon";
  //   return;
  // }

  function checkCoupon(couponElement) {
    return couponElement.name == coupon;
  }

  const couponInArray = couponList.filter(checkCoupon);

  if (couponInArray.length > 0) {
    discount = couponInArray[0].discount;
  } else {
    pResult.innerText = "Invalid coupon";
    return;
  }

  // switch (coupon) {
  //   case "Member-discount":
  //     discount = 30;
  //     break;
  //   case "reward-discount":
  //     discount = 10;
  //     break;
  //   default:
  //     pResult.innerText = "Invalid coupon";
  //     break;
  // }

  const newPrice = (price * (100 - discount)) / 100;
  pResult.innerText = `The new price with discount is $${newPrice}`;
}
