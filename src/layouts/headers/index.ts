import { headerOne } from './headerOne';
import { headerTwo } from './headerTwo';
import { headerThree } from './headerThree';
import { headerFour } from './headerFour';
import { headerFive } from './headerFive';
import { headerSix } from './headerSix';
import { headerSeven } from './headerSeven';
import { headerEight } from './headerEight';

import headerOneSvg from '../../assets/svgs/headerOneSvg'
import headerTwoSvg from '../../assets/svgs/headerTwoSvg'
import headerThreeSvg from '../../assets/svgs/headerThreeSvg'
import headerFourSvg from '../../assets/svgs/headerFourSvg'
import headerFiveSvg from '../../assets/svgs/headerFiveSvg'
import headerSixSvg from '../../assets/svgs/headerSixSvg'
import headerSevenSvg from '../../assets/svgs/headerSevenSvg'
import headerEightSvg from '../../assets/svgs/headerEightSvg'

const layouts = [
    { element: headerOne, thumb: headerOneSvg },
    { element: headerTwo, thumb: headerTwoSvg },
    { element: headerThree, thumb: headerThreeSvg },
    { element: headerFour, thumb: headerFourSvg },
    { element: headerFive, thumb: headerFiveSvg },
    { element: headerSeven, thumb: headerSixSvg },
    { element: headerSix, thumb: headerSevenSvg },
    { element: headerEight, thumb: headerEightSvg },
];
const headers = {name: 'headers', layouts: layouts };
export default headers;
