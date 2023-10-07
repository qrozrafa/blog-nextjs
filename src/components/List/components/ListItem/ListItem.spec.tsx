import { render, screen } from '@testing-library/react';
import { ListItem } from '.';

describe('<List />', () => {
  it('should render a list', () => {
    const children = 'children';

    const { container } = render(<ListItem>{children}</ListItem>);

    const childrenElement = screen.getByText(children);

    expect(childrenElement).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
