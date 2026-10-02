import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { scroller } from 'react-scroll';
import App from './App';

// The external ratings request is unrelated to navigation.
jest.mock('./components/Footer/HygieneRating', () => () => null);

describe('application navigation', () => {
  let scrollTo;
  const originalWidth = window.innerWidth;

  beforeEach(() => {
    window.innerWidth = 1024;
    // Keep real links and section registration; only skip scrolling animation,
    // since jsdom has no layout or browser scrolling.
    scrollTo = jest.spyOn(scroller, 'scrollTo').mockImplementation(() => {});
  });

  afterEach(() => {
    scrollTo.mockRestore();
    window.innerWidth = originalWidth;
  });

  test.each([
    ['Home', 'home'],
    ['Menu', 'menu'],
    ['Contact Us', 'contact-us'],
  ])('%s navigates to its registered page section', (label, target) => {
    render(<App />);
    const navigation = screen.getByRole('navigation', { name: 'Main navigation' });

    expect(scroller.get(target)).toBeInTheDocument();
    userEvent.click(within(navigation).getByText(label));

    expect(scrollTo).toHaveBeenCalledWith(
      target,
      expect.objectContaining({ smooth: true, offset: -100 })
    );
  });
});
