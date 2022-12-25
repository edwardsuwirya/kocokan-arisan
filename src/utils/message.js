import {randomInteger} from "./randomUtil";
import {FOOTER, HEADER} from "./constants";


const getMessage = () => {
    const randHead = randomInteger(0, HEADER.length - 1);
    const randFoot = randomInteger(0, FOOTER.length - 1)
    return {
        head: HEADER[randHead],
        foot: FOOTER[randFoot]
    }
}

export default getMessage;