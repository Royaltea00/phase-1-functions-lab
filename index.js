// Code your solution in this file!
function distanceFromHqInBlocks(block2) {
    const block1 = 42;
    return Math.abs(block2 - block1);
}
function distanceFromHqInFeet(block2){
    const distance = distanceFromHqInBlocks(block2);
    return distance*264;
}
function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination);
    return distance*264
}
function calculatesFarePrice(start, destination) {

    let distance = distanceTravelledInFeet(start, destination)

    if(distance<=400){
        return 0;
    } else if(distance>=400 && distance <=2000){
        return(distance - 400)* 0.02;
    } else if (distance > 2000 && distance <=2500) {
        return 25;
    } else{
        return('cannot travel that far')
    }
}