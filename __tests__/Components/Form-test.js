'use strict'
import Form from '../../src/Components/Form/Form';
import React from 'react';
import TestUtils from 'react-dom/test-utils';

describe('When the Form component is rendered', ()=>{
        let form = TestUtils.renderIntoDocument(
            <Form />
        );
        
        // Username field

        describe('the UsernameField', ()=>{
            let UsernameField = form.refs.UsernameField

            it('should be rendered once', ()=>{
                let UsernameTextFieldComponent = TestUtils.findRenderedDOMComponentWithClass(
                    form,
                    'UsernameField'
                );

                expect(TestUtils.isDOMComponent(
                    UsernameTextFieldComponent
                )).toBe(true);
            })

            it('should have its input empty', ()=>{
                expect(form.state.userName).toBe('');        
                expect(UsernameField.props.value).toBe('');
            })

            it('should have an onChange attribute bound', ()=>{
                expect(UsernameField.props.onChange.length).toBe(1);
            })
        })
        // Submit button

        describe('the SubmitButton', ()=>{
            let submitButton = form.refs.SubmitButton

            it('should be rendered once', ()=>{
                let SubmitButtonRaisedButtonComponent = TestUtils.findRenderedDOMComponentWithClass(
                form,
                'SubmitButton'
            );

                expect(TestUtils.isDOMComponent(
                    SubmitButtonRaisedButtonComponent
                )).toBe(true);
            })

            it('should have an onClick attribute bound',()=>{
                expect(submitButton.props.onClick.length).toBe(1);
            }) 
        })

        // Ordering list

        describe('the OrderingList', ()=>{
            let OrderingList = form.refs.OrderingList

            it('should be rendered once', ()=>{
                let OrderingSelectFieldComponent = TestUtils.findRenderedDOMComponentWithClass(
                    form,
                    'OrderingList'
                );
                expect(TestUtils.isDOMComponent(
                    OrderingSelectFieldComponent
                )).toBe(true);
            })
            
            it('should have an onChange attribute bound for each element in the dropdown list', ()=>{
                let numberOfElementsInList = OrderingList.props.children.length + 1;
                expect(OrderingList.props.onChange.length).toBe(numberOfElementsInList);
            })

            it('should have 2 elements in the list', ()=>{
                expect(OrderingList.props.children.length).toBe(2);
            })

            it('should have the default value of "desc"', ()=>{
                expect(OrderingList.props.value).not.toBe('');
                expect(form.state.value).toBe('desc');
            })
        })
})

