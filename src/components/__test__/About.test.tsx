import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import About from '../About';

describe('About', () => {
  it('renders about section heading', () => {
    render(<About />);
    
    expect(screen.getByText(/Why Choose/i)).toBeInTheDocument();
  });

  it('renders about illustration', () => {
    render(<About />);
    
    const images = document.querySelectorAll('img');
    expect(images.length).toBeGreaterThan(0);
  });

  it('renders feature cards', () => {
    render(<About />);
    
    // Check for some key features
    expect(screen.getByText(/Real-time inventory tracking/i)).toBeInTheDocument();
    expect(screen.getByText(/Advanced analytics & reporting/i)).toBeInTheDocument();
  });
});
