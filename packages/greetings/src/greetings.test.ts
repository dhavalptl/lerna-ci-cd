import { greetings } from "./greetings";

describe('Greetings', () => {
    it('show greetings', () => {
        expect(greetings('user')).toBe('Hello user !!');
    });
});