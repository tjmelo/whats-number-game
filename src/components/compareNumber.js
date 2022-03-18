"use strict";

import{ 
    UTILS,
    feedback 
} from '../utils';

import { mountSegments } from './mountSegments';

export const compareNumber = (typeNumber, hintNumber) => {

    mountSegments(typeNumber);

    typeNumber = parseInt(typeNumber)

    if(hintNumber === 502){
        feedback('feedback feedback-error', 'Error');
        UTILS.NEWNUMBER.removeAttribute('disabled');
        UTILS.SEGMENT.classList.add('segment-error');
        UTILS.HINT.forEach(h => h.setAttribute('disabled', true))
    }
    
    if(typeNumber === hintNumber){
        feedback('feedback feedback-win', 'Got it right!!!')
        UTILS.NEWNUMBER.removeAttribute('disabled');
        UTILS.SEGMENT.classList.add('segment-win');
        UTILS.HINT.forEach(h => h.setAttribute('disabled', true));
    }

    (typeNumber > hintNumber) ? feedback('feedback feedback-menor', 'it\'s smaller') : 0;
    (typeNumber < hintNumber) ? feedback('feedback feedback-maior', 'It\'s bigger') : 0;

}