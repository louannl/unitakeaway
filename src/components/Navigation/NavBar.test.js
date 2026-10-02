import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { scroller } from 'react-scroll';
import NavBar from './NavBar';

describe('mobile navigation', () => {
  const originalWidth = window.innerWidth;

  beforeEach(() => {
    window.innerWidth = 375;
  });

  afterEach(() => {
    window.innerWidth = originalWidth;
    jest.restoreAllMocks();
  });

  test('starts collapsed with an accessible toggle controlling the navigation', () => {
    render(<NavBar />);
    const toggle = screen.getByRole('button', { name: 'Open navigation menu' });
    const navigation = screen.getByRole('navigation', { name: 'Main navigation' });

    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveAttribute('aria-controls', navigation.id);
    expect(navigation).toHaveClass('hidden');
    // jsdom does not apply Tailwind media queries. Check the responsive classes
    // explicitly: links stay visible on desktop and the toggle is mobile only.
    expect(navigation).toHaveClass('sm:flex');
    expect(toggle.parentElement).toHaveClass('sm:hidden');
  });

  test('opens, closes, and reopens the mobile menu', () => {
    render(<NavBar />);
    const navigation = screen.getByRole('navigation', { name: 'Main navigation' });

    userEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));
    const closeButton = screen.getByRole('button', { name: 'Close navigation menu' });
    expect(closeButton).toHaveAttribute('aria-expanded', 'true');
    expect(navigation).toHaveClass('block');
    expect(navigation).not.toHaveClass('hidden');
    expect(within(navigation).getByText('Home')).toBeInTheDocument();
    expect(within(navigation).getByText('Menu')).toBeInTheDocument();
    expect(within(navigation).getByText('Contact Us')).toBeInTheDocument();

    userEvent.click(closeButton);
    expect(screen.getByRole('button', { name: 'Open navigation menu' }))
      .toHaveAttribute('aria-expanded', 'false');
    expect(navigation).toHaveClass('hidden');

    userEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));
    expect(navigation).toHaveClass('block');
  });

  test.each([
    ['Home', 'home'],
    ['Menu', 'menu'],
    ['Contact Us', 'contact-us'],
  ])('the expanded mobile menu can navigate to %s', (label, target) => {
    const scrollTo = jest.spyOn(scroller, 'scrollTo').mockImplementation(() => {});
    render(<NavBar />);
    userEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));
    const navigation = screen.getByRole('navigation', { name: 'Main navigation' });

    userEvent.click(within(navigation).getByText(label));

    expect(scrollTo).toHaveBeenCalledWith(
      target,
      expect.objectContaining({ smooth: true, offset: -100 })
    );
  });
});
