function getShippingCost(country) {
  let deliveryCost;
  switch (country) {
    case "China":
      deliveryCost = 100;
      break;
    case "Chile":
      deliveryCost = 250;
      break;
    case "Australia":
      deliveryCost = 170;
      break;
    case "Jamaica":
      deliveryCost = 120;
      break;
    default:
      deliveryCost = 0;
  }

  return deliveryCost ? `Shipping to ${country} will cost ${deliveryCost} credits` : `Sorry, there is no delivery to your country`;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
