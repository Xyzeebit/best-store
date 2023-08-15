import { describe, it, expect } from 'vitest';
import { Header } from '../components/core';
// import { renderWithProvider } from '../utils';
import { screen, render } from '@testing-library/react';

describe('Header', () => {
    it("Should have the app name displayed correctly", () => {
        render(
          <Header>
            <h1>beststore</h1>
          </Header>
        );
        const text = screen.getByText(/beststore/i);
        expect(text).toBeInTheDocument();
    });
});