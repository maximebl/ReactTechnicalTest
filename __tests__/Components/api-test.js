'use strict'
import Form from '../../src/Components/Form/Form';
import React from 'react';
import TestUtils from 'react-dom/test-utils';

let api = require.requireActual('../../src/tools/api');

describe('addTimeSinceRepoUpdate', ()=>{
    it('should add a new "time_since_update" property to the repo input', ()=>{
        let fakeRepoInput = [{updated_at:new Date()}]
        api.addTimeSinceRepoUpdate(fakeRepoInput);
        expect(fakeRepoInput[0]['time_since_update']).toBeDefined();
    })
})

describe('getUserRepoInformation', ()=>{
    it('should make a call to getUserRepos, getUserInfo and addTimeSinceRepoUpdate', ()=>{

        const getUserInfoSpy = jest.spyOn(api, 'getUserInfo').mockImplementation(() => {});
        const getUserReposSpy = jest.spyOn(api, 'getUserRepos').mockImplementation(() => {});
        const addTimeSinceRepoUpdateSpy = jest.spyOn(api, 'addTimeSinceRepoUpdate');
        
        api.getUserRepoInformation();
        expect(getUserReposSpy).toHaveBeenCalled;
        expect(getUserInfoSpy).toHaveBeenCalled;
        expect(addTimeSinceRepoUpdateSpy).toHaveBeenCalled;
    })
})

