'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Loader2 } from 'lucide-react';

interface FormData {
  email: string;
}

export default function ForgotPasswordPage() {
  const [formData, setFormData] = useState<FormData>({ email: '' });
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  }

  function validateForm(): boolean {
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    return true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // If successful, show success message
      setIsEmailSent(true);
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Back to Login Link */}
          <Link
            href="/login"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Link>

          <div className="bg-card rounded-lg shadow-lg p-6 space-y-6">
            <div className="text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h1 className="text-2xl font-bold">Forgot Password?</h1>
              <p className="text-muted-foreground mt-2">
                No worries! Enter your email and we&apos;ll send you reset
                instructions.
              </p>
            </div>

            {isEmailSent ? (
              <div className="text-center space-y-4">
                <div className="bg-primary/10 text-primary p-4 rounded-lg">
                  <p className="font-medium">Check your email</p>
                  <p className="text-sm mt-1">
                    We&apos;ve sent password reset instructions to{' '}
                    <span className="font-medium">{formData.email}</span>
                  </p>
                </div>

                <div className="text-sm text-muted-foreground">
                  Didn&apos;t receive the email?{' '}
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="text-primary hover:text-primary/90 font-medium"
                  >
                    Click to resend
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Email Field */}
                <div className="space-y-1">
                  <label className="text-sm font-medium">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 pl-10 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your email"
                      disabled={isLoading}
                    />
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>
                  {error && <p className="text-destructive text-sm">{error}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="inline-flex items-center">
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    'Send Reset Instructions'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
