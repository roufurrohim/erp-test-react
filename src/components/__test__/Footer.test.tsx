import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders company name', () => {
    render(<Footer />);
    
    expect(screen.getByText('ERP')).toBeInTheDocument();
  });

  it('renders all navigation sections', () => {
    render(<Footer />);
    
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Careers')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders product links', () => {
    render(<Footer />);
    
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('API')).toBeInTheDocument();
  });

  it('renders company links', () => {
    render(<Footer />);
    
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Careers')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('renders support links', () => {
    render(<Footer />);
    
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('Cookie Policy')).toBeInTheDocument();
    expect(screen.getByText('Security')).toBeInTheDocument();
  });

  it('renders copyright text with current year', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} ERP. All rights reserved.`)).toBeInTheDocument();
  });

  it('renders social media icons', () => {
    render(<Footer />);
    
    const socialLinks = screen.getAllByRole('link', { name: '' });
    expect(socialLinks.length).toBeGreaterThan(0);
  });
});
