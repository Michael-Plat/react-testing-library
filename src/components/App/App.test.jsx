import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  it('App renders', () => {
    render(<App />)

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('Find course:')).toBeInTheDocument();
  });
  it('typing Searchbox works', () => {
    render(<App />);

    expect(screen.queryByDisplayValue(/React/i)).toBeNull();

    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument();
  });
  it('search filter is  working', () => {
    render(<App />);

    expect(screen.getByText(/Vue/)).toBeInTheDocument();
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), 'script');

    expect(screen.queryByText(/Vue/)).toBeNull();
    expect(screen.queryByText(/JavaScript/)).toBeInTheDocument();
  });
  it('App snapshot', () => {
    const app = render(<App />);

    expect(app).toMatchSnapshot();
  });
});
