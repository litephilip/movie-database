import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar.jsx';

describe('SearchBar Component', () => {
  it('allows the user to type in the search input and triggers onSearch when the search button is clicked', async () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByRole('textbox');
    const searchButton = screen.getByTestId('search-test-button');

    await userEvent.type(input, 'guardians of the galaxy');

    expect(input.value).toBe('guardians of the galaxy');

    await userEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalledWith('guardians of the galaxy');
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    
  });
});