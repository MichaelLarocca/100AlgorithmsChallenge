export function electionsWinners(votes: number[], k: number): number {

    let counterCandidates: number = 0;
    let leadingCandidate: number = Math.max(...votes);
            console.log(leadingCandidate);

    for(let i = 0; i < votes.length; i++) {
            console.log(votes[i] + k);

        if(votes[i] + k> leadingCandidate) {
            counterCandidates += 1;
        }
    }
            console.log(counterCandidates);
    return counterCandidates;
}

console.log(electionsWinners([2, 3, 5, 2], 3));