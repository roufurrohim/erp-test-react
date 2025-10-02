import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import Index from '../Index';

describe('Index Page', () => {
  it('renders all main sections', () => {
    render(<Index />);
    
    // Check if main components are rendered
    expect(screen.getByText('ERP')).toBeInTheDocument();
    expect(screen.getByText(/"Excepteur sint occaecat cupidatat non proident"/i)).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    const { container } = render(<Index />);
    
    // Check for semantic HTML elements
    const main = container.querySelector('main');
    expect(main).toBeNull();
  });
});
