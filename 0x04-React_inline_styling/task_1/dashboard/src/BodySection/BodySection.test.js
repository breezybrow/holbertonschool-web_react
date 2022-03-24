import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe("Testing <BodySection /> functions:", () => {
  it("BodySection renders correcly without crashing", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    const body = wrapper.find('.bodySection').first();
    const h2 = wrapper.find("h2");
    const p = wrapper.find("p");

    expect(body.exists()).toEqual(true);
    expect(h2).toHaveLength(1);
    expect(h2.text()).toEqual('test title');

    expect(p).toHaveLength(1);
    expect(p.text()).toEqual('test children node');
  });
});