import ResultHeader from '../../src/Components/ResultHeader/ResultHeader';
import GitHubUserRepos from '../../src/Components/GitHubUserRepos/GitHubUserRepos';
import Form from '../../src/Components/Form/Form';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
// jest.dontMock('../../src/Components/ResultHeader/ResultHeader');
describe('When the GitHubUserRepos component', ()=>{
describe('is rendered', ()=>{
let gitHubUserRepos = TestUtils.renderIntoDocument(
<GitHubUserRepos />
);
it('should have its Form component rendered', ()=>{
let onlyFormComponent = TestUtils.findRenderedComponentWithType(
gitHubUserRepos,
Form
);
expect(TestUtils.isCompositeComponentWithType(
onlyFormComponent,
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
})
})
