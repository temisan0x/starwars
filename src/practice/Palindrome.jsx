//palindrome a word that matches the same when called backwards
/**
*121 = true;
*123 = false;
*argorithm
 *  create reversed variable
 * create current variable equal to int
 * loop through if curent doesn't equal to 0;
 * 
 */


const Palindrome = () => {
    const palin = (int = 121) => {
        // return String(int) === String(int).split('').reverse().join('');
        if (int < 0 || (int > 0 && int % 10 === 0)) return false;

        let reverted = 0;
        while (int > reverted) {
            reverted = reverted * 10 + int % 10;
            int = Math.floor(int / 10);
        }
        //comparison | discard center digit and then do the comparison
        return int === reverted || int === Math.floor(reverted/10)
    }
    console.log(palin());
    return (
        <div>
        </div>
    )
}

export default Palindrome