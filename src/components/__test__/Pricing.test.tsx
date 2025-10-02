import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Pricing from '../Pricing';

describe('Pricing', () => {
  it('renders all three pricing tiers', () => {
    render(<Pricing />);
    
    expect(screen.getByText('Basic')).toBeInTheDocument();
    expect(screen.getByText('Business')).toBeInTheDocument();
    expect(screen.getByText('Entrepreneur')).toBeInTheDocument();
  });

  it('displays correct prices', () => {
    render(<Pricing />);
    
    expect(screen.getByText('$19')).toBeInTheDocument();
    expect(screen.getByText('$49')).toBeInTheDocument();
    expect(screen.getByText('$99')).toBeInTheDocument();
  });

  it('renders all features for each tier', () => {
    render(<Pricing />);
    
    // Basic tier features
    expect(screen.getByText('Record incoming items')).toBeInTheDocument();
    expect(screen.getByText('Record outgoing items')).toBeInTheDocument();
    expect(screen.getByText('Record profit results')).toBeInTheDocument();
    
    // Business tier additional features
    expect(screen.getByText('Analyze sales results with charts business')).toBeInTheDocument();
    expect(screen.getByText('24/7 Support')).toBeInTheDocument();
    
    // Entrepreneur tier additional features
    expect(screen.getByText('Export data to Excel')).toBeInTheDocument();
    expect(screen.getByText('AI-based income prediction')).toBeInTheDocument();
  });

  it('highlights the Business tier as popular', () => {
    render(<Pricing />);
    
    expect(screen.getByText('Popular')).toBeInTheDocument();
  });

  it('renders choose plan buttons for all tiers', () => {
    render(<Pricing />);
    
    const buttons = screen.getAllByRole('button', { name: /Get Started/i });
    expect(buttons).toHaveLength(3);
  });
});
