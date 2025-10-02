import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import Contact from '../Contact';
import { toast } from 'sonner';

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
  },
}));

describe('Contact', () => {
  it('renders contact form with all fields', () => {
    render(<Contact />);
    
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Contact />);
    
    expect(screen.getByText('support@ERPer.com')).toBeInTheDocument();
    expect(screen.getByText('+62 (221) 123-4567')).toBeInTheDocument();
    expect(screen.getByText(/Central Jakarta, 10250/i)).toBeInTheDocument();
  });

  it('handles form input changes', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const nameInput = screen.getByLabelText('Name') as HTMLInputElement;
    const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
    const messageInput = screen.getByLabelText('Message') as HTMLTextAreaElement;
    
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'Test message');
    
    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(messageInput).toHaveValue('Test message');
  });

  it('shows success toast on form submission', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const nameInput = screen.getByLabelText('Name') as HTMLInputElement;
    const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
    const messageInput = screen.getByLabelText('Message') as HTMLTextAreaElement;
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'Test message');
    await user.click(submitButton);
    
    expect(toast.success).toHaveBeenCalledWith("Message sent successfully! We'll get back to you soon.");
  });

  it('clears form after submission', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const nameInput = screen.getByLabelText('Name') as HTMLInputElement;
    const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
    const messageInput = screen.getByLabelText('Message') as HTMLTextAreaElement;
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'Test message');
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(nameInput).toHaveValue('');
      expect(emailInput).toHaveValue('');
      expect(messageInput).toHaveValue('');
    });
  });
});
