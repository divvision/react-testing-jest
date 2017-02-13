import React from 'react';
import ReactDOM from'react-dom';
import TestUtils from 'react-addons-test-utils';
import { mount } from 'enzyme';

import Countdown from 'Countdown';

describe('Countdown', () => {
    it('renders without crashing', () => {
        mount(<Countdown/>);
    });

    describe('handleSetCountdownTime', () => {
        it('should set countdown time and start countdown', (done) => {
            const countdown = mount(<Countdown/>);
            countdown.instance().handleSetCountdownTime(10);
            expect(countdown.instance().state.count).toBe(10);
            expect(countdown.instance().state.countdownStatus).toBe(1);

            setTimeout(() => {
                expect(countdown.instance().state.count).toBe(9);
                done();
            }, 1001)
        });

        it('should never set countdown time to less than zero', (done) => {
            const countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdownTime(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3000)
        });
    });
});