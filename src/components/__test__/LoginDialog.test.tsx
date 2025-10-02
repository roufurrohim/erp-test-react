import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import LoginDialog from '../LoginDialog';
import { toast } from 'sonner';

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    info: vi.fn(),
  },
}));

describe('LoginDialog', () => {
  const mockOnOpenChange = vi.fn();

  it('renders login form when open', () => {
    render(<LoginDialog open={true} onOpenChange={mockOnOpenChange} />);
    
    expect(screen.getByText('Welcome Back')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<LoginDialog open={false} onOpenChange={mockOnOpenChange} />);
    
    expect(screen.queryByText('Welcome Back')).not.toBeInTheDocument();
  });

  it('handles form input changes', async () => {
    const user = userEvent.setup();
    render(<LoginDialog open={true} onOpenChange={mockOnOpenChange} />);
    
    const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
    const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
    
    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'password123');
    
    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
  });

  it('shows success toast on form submission', async () => {
    const user = userEvent.setup();
    render(<LoginDialog open={true} onOpenChange={mockOnOpenChange} />);
    
    const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
    const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: /sign in/i });
    
    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'password123');
    await user.click(submitButton);
    
    expect(toast.success).toHaveBeenCalledWith('Login successful! (Frontend UI only)');
    expect(mockOnOpenChange).toHaveBeenCalledWith(false);
  });

  it('shows info toast when sign up is clicked', async () => {
    const user = userEvent.setup();
    render(<LoginDialog open={true} onOpenChange={mockOnOpenChange} />);
    
    const signUpButton = screen.getByText(/sign up/i);
    await user.click(signUpButton);
    
    expect(toast.info).toHaveBeenCalledWith('Sign up feature coming soon!');
  });
});
