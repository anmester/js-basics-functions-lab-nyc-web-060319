function distanceFromHqInBlocks (distance) {
    return Math.abs(distance - 42);
}

function distanceFromHqInFeet (distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet (street1, street2) {
    return Math.abs(street1 - street2) * 264;
}

function calculatesFarePrice(street1, street2) {
    const feet = distanceTravelledInFeet(street1, street2);
    if (feet < 400){
        return 0;
    }
    else if (feet < 2000 && feet > 400){
        return (feet - 400) * .02;
    }
    else if (feet > 2000 && feet < 2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}