import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders main heading with highlighted text', () => {
    render(<Hero />);
    
    expect(screen.getByText('"Excepteur sint occaecat cupidatat non proident"')).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorum qui quam voluptas alias molestiae accusantium eum quo sequi praesentium obcaecati autem adipisci, aspernatur neque aliquam cumque distinctio odit soluta.")).toBeInTheDocument();
  });
});
