// Code your solution in this file!
function distanceFromHqInBlocks(passengerStreet){
    const hqStreet=42
    if (passengerStreet>hqStreet){
     return (passengerStreet-hqStreet)
    }
    else{
        return(hqStreet-passengerStreet)
    } 

}

    
function distanceFromHqInFeet(passengerStreet){
          return distanceFromHqInBlocks(passengerStreet)*264
}

function distanceTravelledInFeet(starting,destination){
    if(destination>starting){
        return((destination-starting)*264)
    } 
    else{
        return((starting-destination)*264)
    }
}

function calculatesFarePrice(starting,destination){
    const distanceInFeet=distanceTravelledInFeet(starting,destination)
    if(distanceInFeet<=400){
        return(0)
    }
    if(distanceInFeet>400,distanceInFeet<=2000){
        return((((distanceInFeet-400)*2))/100)
    }
    if(distanceInFeet>2000,distanceInFeet<=2500){
        return(25)
    }
    if(distanceInFeet>2500){
        return('cannot travel that far')
    }
}