export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {

    let yourStrength: number = yourLeft <= yourRight ? yourLeft : yourRight;
            console.log(yourStrength);
    let yourFriendsStrength: number = friendsLeft <= friendsRight ? friendsLeft: friendsRight;
            console.log(yourFriendsStrength)

    return yourStrength === yourFriendsStrength ? true : false;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
