
function invoice(price, number){
  var tot = (shipping(price*number*1.08) + price*number*1.08);
  return "Your total cost is: " + tot;
}
