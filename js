// Problem-1.
function seerToMon (seer){
    const number = 0;
    if( typeof(seer)!= typeof (number) || seer < 1){
    return 'Sorry, this is error items'
    }
    else{
    var mon = seer/37.32;
    return mon;
    }
    }
    // var mons = seerToMon(100);
    // console.log(mons);
    // Problem-2 .
    function totalSales(shirt, pant, shoes){
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoesPrice =500;
    //error messeges
    if (shirt < 0 || pant < 0 || shoes <0){
    return "sorry! you can not add o items";
    }
    else{
    const totalShirtPrice =shirt * shirtPrice;
    const totalPantPrice =pant * pantPrice;
    const totalShoesPrice =shoes * shoesPrice;
    const totalPrice= totalShirtPrice + totalPantPrice + totalShoesPrice;
    return totalPrice;
    }
    }
    // const firstBayer = totalSales(2, 1, 1);
    // console.log(firstBayer);
    // Problem-3
    function deliveryCost(shirt) {
    const number = 0;
    if (typeof (shirt) != typeof (number) || shirt < 1) {
    return 'Input erorr!! Please, write a number'
    }
    const firstHundredPerCost = 100;
    const secondHundredPerCost = 80;
    const extraShirtPerCost = 50;
    if (shirt <= 100) {
    const count = shirt * firstHundredPerCost;
    return count;
    }
    else if (shirt <= 200) {
    const firstStapeShirtCost = 100 * firstHundredPerCost;
    const secondRestShirtQuantity = shirt - 100;
    const secondStapeShirtCost = secondRestShirtQuantity * secondHundredPerCost;
    const secondStapeTotalShirtCost = firstStapeShirtCost + secondStapeShirtCost;
    return secondStapeTotalShirtCost;
    }
    else {
    const firstStapeShirtCost = 100 * firstHundredPerCost;
    const secondStapeShirtCost = 100 * secondHundredPerCost;
    const endRestShirtQuantity = shirt - 200;
    const endStapeShirtCost = endRestShirtQuantity * extraShirtPerCost;
    const endStapeTotalShirtCost = firstStapeShirtCost + secondStapeShirtCost + endStapeShirtCost;
    return endStapeTotalShirtCost;
    }
    }
    // const shirtQuantity = 201;
    // const totalCost = deliveryCost(shirtQuantity)
    // console.log(totalCost)
    // problem-4
    function perfectFriend(friends) {
    for(const friend of friends){
    const string = 'string';
    if(typeof(friend) != typeof(string)){
    const inputError = 'Only string are allowed. Please, Input String';
    return inputError;
    }
    else if(friend.length != 6){
    continue;
    }
    return friend;
    }
    return 'Perfect Friend not found, Better luck next time';
    }
    // const friendName = ['MD', 'Nadim', 'Mahmud', 'amar', "nam"];
    // let friend = perfectFriend(friendName);
    // console.log(friend);