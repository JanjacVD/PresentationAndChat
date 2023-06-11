export function cipherRot13(str: string, num: number) {
    str = str.toUpperCase();
    return str.replace(/[A-Z]/g, rot13);

    function rot13(correspondance: any) {
        const charCode = correspondance.charCodeAt();
        //A = 65, Z = 90
        return String.fromCharCode(
            charCode + num <= 90 ? charCode + num : ((charCode + num) % 90) + 64
        );
    }
}
const railCycle = (n:number) => {
    let rail = 0;
    let dir = +1;
    return function() {
      const retVal = rail;
      if ((rail === 0 && dir === -1) || (rail === n-1 && dir === +1)) {
        dir *= -1;
      }
      rail += dir;
      return retVal;
    }
  }
  /* ********************************************************* */
  export const Railencode = (phrase:string, numRails:number) => {
    if(numRails < 2) return phrase
    const nextRail = railCycle(numRails);
    const rails = new Array(numRails).fill('');
    phrase.split("").forEach((c) => rails[nextRail()] += c);
    return rails.join("");
  };
  /* ********************************************************* */
  export const Raildecode = (phrase:string, numRails:number) => {
    if(numRails < 2) return phrase
    // 1. determine the length of each rail
    const railLengths = new Array(numRails).fill(0);
    const cycleLength = 2 * (numRails - 1);
    const numCycles = Math.floor(phrase.length / cycleLength);
    for (let r = 0; r < numRails; r++) {
      railLengths[r] = numCycles;
      // "inner" rails consume 2 chars for each cycle
      if (1 <= r && r < numRails - 1) railLengths[r] *= 2;
    }
    let nextRail = railCycle(numRails);
    for (let i = cycleLength * numCycles; i < phrase.length; i++) {
      railLengths[nextRail()] += 1;
    }
    // 2. determine where in the string each rail starts
    const railStart = new Array(numRails).fill(0);
    for (let r = 1; r < numRails; r++) {
      railStart[r] = railStart[r-1] + railLengths[r-1];
    }
    // 3. run the rails to extract the plaintext
    nextRail = railCycle(numRails);
    const railIdx = new Array(numRails).fill(0);
    const decoded = [];
    for (let i = 0; i < phrase.length; i++) {
      const r = nextRail()
      decoded.push(phrase[railStart[r] + railIdx[r]]);
      railIdx[r] += 1;
    }
    return decoded.join("");
  };