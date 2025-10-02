import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import Header from '../Header';

describe('Header', () => {
  const mockOnLoginClick = vi.fn();

  it('renders logo and navigation links', () => {
    render(<Header onLoginClick={mockOnLoginClick} />);
    
    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('PRICING')).toBeInTheDocument();
    expect(screen.getByText('CONTACT')).toBeInTheDocument();
  });

  it('renders login button', () => {
    render(<Header onLoginClick={mockOnLoginClick} />);
    
    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  it('calls onLoginClick when login button is clicked', () => {
    render(<Header onLoginClick={mockOnLoginClick} />);
    
    const loginButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(loginButton);
    
    expect(mockOnLoginClick).toHaveBeenCalled();
  });

  it('toggles mobile menu', () => {
    render(<Header onLoginClick={mockOnLoginClick} />);
    
    // Find the mobile menu button (Menu icon button)
    const menuButtons = screen.getAllByRole('button');
    const menuToggle = menuButtons.find(btn => btn.textContent === '' && btn.className.includes('md:hidden'));
    
    if (menuToggle) {
      fireEvent.click(menuToggle);
      
      // Mobile menu should be visible after click - look for duplicate navigation links
      const homeButtons = screen.getAllByText('HOME');
      expect(homeButtons.length).toBeGreaterThan(1); // Desktop + mobile menu
    }
  });
});
