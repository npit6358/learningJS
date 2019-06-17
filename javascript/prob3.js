
function shipping(total){
  if (total < 100){
    var cost = total*.10;
  } else {
    var cost = 0.;
  }
//  return "Your shipping cost is: " + cost;
    return cost;
}
