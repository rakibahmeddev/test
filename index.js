function radianToDegree(radian) {
  if (typeof radian !== "number") {
    return "Please enter a number";
  }
  const degree = radian * 57.2958;
  const degreeDigit = degree.toFixed(2);
  return degreeDigit;
}

function isJavascriptFile(scripts) {
  if (scripts.endsWith(".js")) {
    return true;
  } else {
    return false;
  }
}

function oilPrice(dieselQty, petrolQty, octaneQty) {
  if (
    typeof dieselQty !== "number" ||
    typeof petrolQty !== "number" ||
    typeof octaneQty !== "number"
  ) {
    return "Please enter a number";
  }
  const perLiterDieselRate = 114;
  const perLiterPetrolRate = 130;
  const perLiterOctaneRate = 135;

  const dieselPrice = perLiterDieselRate * dieselQty;
  const petrolPrice = perLiterPetrolRate * petrolQty;
  const octanePrice = perLiterOctaneRate * octaneQty;
  const totalOilCost = dieselPrice + petrolPrice + octanePrice;

  return totalOilCost;
}

function publicBusFare(persons) {
  if (typeof persons !== "number") {
    return "Please enter a number";
  }
  const busTotalSit = 50;
  const microTotalSit = 11;
  const busSitRate = 250;

  const busFillUp = persons % busTotalSit;
  const microFillUp = busFillUp % microTotalSit;
  const total = microFillUp * busSitRate;
  return total;
}

function isBestFriend(friends1, friends2) {
  if (friends1.name == friends2.friend && friends2.name == friends1.friend) {
    return true;
  } else {
    return false;
  }
}
