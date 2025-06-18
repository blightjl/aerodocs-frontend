import { vi } from 'vitest';

vi.mock('next/font/google', () => ({
    Roboto_Flex: () => ({ className: 'mock-font' }),
}));