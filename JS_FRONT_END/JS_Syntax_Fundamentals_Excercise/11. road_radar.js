function roadRadar(speed, area) {
    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;
    let status = '';
    let result = '';

    switch(area) {
        case "motorway":
            result = checkResult(motorwayLimit);
            break;
        case "interstate":
            result = checkResult(interstateLimit);
            break;
        case "city":
            result = checkResult(cityLimit);
            break;
        case "residential":
            result = checkResult(residentialLimit);
            break;
    }

    function checkResult(drivingArea) {
        if (speed <= drivingArea) {
            return `Driving ${speed} km/h in a ${drivingArea} zone`;
        } else {
            let diff = speed - drivingArea;
            status = checkStatus(diff);
            return `The speed is ${diff} km/h faster than the allowed speed of ${drivingArea} - ${status}`;
        }
    }

    function checkStatus(diff) {
        if (diff <= 20) {
            return "speeding";
        } else if (diff > 20 && diff <= 40) {
            return "excessive speeding";
        } else {
            return "reckless driving"
        }
    }

    console.log(result);
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
