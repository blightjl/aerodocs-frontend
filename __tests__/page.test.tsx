import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '../src/app/page';

test('renders AERODOCS heading', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { 
        level: 1,
        name: /A\s*E\s*R\s*O\s*D\s*O\s*C\s*S/,
    });    
    expect(heading).toBeDefined();
});