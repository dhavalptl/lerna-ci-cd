import { test } from "./application";

describe('Application', () => {
    it('show output', () => {
        expect(test('user')).toBe('Hello user !!');
    });
});