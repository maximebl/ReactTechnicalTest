import GitHubUserRepos from '../../src/Components/GitHubUserRepos/GitHubUserRepos';
import Form from '../../src/Components/Form/Form';
import React from 'react';
import TestUtils from 'react-dom/test-utils';

describe('When the GitHubUserRepos component is rendered', ()=>{
        let gitHubUserRepos = TestUtils.renderIntoDocument(
            <GitHubUserRepos />
        );

        it('should have its Form component rendered', ()=>{

            let FormComponent = TestUtils.findRenderedComponentWithType(
                gitHubUserRepos,
                Form
            );
            
            expect(TestUtils.isCompositeComponentWithType(
                FormComponent,
                Form
            )).toBe(true);
        });

        it('should have a ResultHeader which is not visible', ()=>{
            let onlyResultHeader = TestUtils.findRenderedDOMComponentWithClass(
                gitHubUserRepos,
                'resultHeader--hidden'
            )
            expect(gitHubUserRepos.state.headerVisible).toBe(false);
        })

        it('should have a CardList which is not visible', ()=>{
            let onlyCardList = TestUtils.findRenderedDOMComponentWithClass(
                gitHubUserRepos,
                'resultHeader--hidden'
            )
            expect(gitHubUserRepos.state.headerVisible).toBe(false);
        })
})
