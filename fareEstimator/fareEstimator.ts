export function fareEstimator(ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] {
// (Cost per minute) * (ride time) + (Cost per mile) * (ride distance)
    let estimate: number[] = [];

    for(let i = 0; i < cost_per_minute.length; i++) {

        let currentEstimate = parseFloat((cost_per_minute[i] * ride_time + cost_per_mile[i] * ride_distance).toFixed(1));
                console.log(currentEstimate);
        
        estimate.push(currentEstimate);
    }

    return estimate;  
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
