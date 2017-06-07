'use strict'
import Form from '../../src/Components/Form/Form';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import {formatTimeSinceUpdate} from '../../src/tools/stringUtils';

describe('formatTimeSinceUpdate', ()=>{
    it('should return a singular word when the input is 1', ()=>{
        let formattedTime = formatTimeSinceUpdate(1,1,1);
        expect(formattedTime).not.toBeNull();
        expect(formattedTime).toBeDefined();

        let wordsToMatch = ['day', 'hour', 'minute'];
        wordsToMatch.forEach((word)=>{
            let RegexMatch = expect.stringMatching(`\\b${word}\\b`);
            expect(formattedTime).toEqual(RegexMatch);    
        })
    })

    it('should return a pluralized word when the input is greater than 1', ()=>{
        let formattedTime = formatTimeSinceUpdate(2,2,2);
        expect(formattedTime).not.toBeNull();
        expect(formattedTime).toBeDefined();

        let wordsToMatch = ['days', 'hours', 'minutes'];
        wordsToMatch.forEach((word)=>{
            let RegexMatch = expect.stringMatching(`\\b${word}\\b`);
            expect(formattedTime).toEqual(RegexMatch);    
        })
    })
});
    