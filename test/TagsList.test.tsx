import { render } from '@testing-library/react';
import expect from 'expect';
import * as React from 'react';

import TagsList from '../src/components/TagsList';
import { Provider } from '../src/Context/Theme/ThemeContext';

it("TagsList renders", () => {
  const tree = render(
    <Provider>
      <TagsList tags={["1", "2"]} />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
