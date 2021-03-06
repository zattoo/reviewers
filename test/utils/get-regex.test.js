const {getRegex} = require('../../src/utils');

describe(getRegex.name, () => {
   it('returns null if level is undefined', () => {
      expect(getRegex(undefined, '')).toEqual(null);
   });

   it('returns regex for a level', () => {
      expect(getRegex('(projects|tv-clients)/.*', '/home')).toEqual( /\/home\/(projects|tv-clients)\/.*/);
   });
});
