import lengthOfLongestSubstring from '.';

describe('lengthOfLongestSubstring()', () => {
  it('should return correct value from a standard input', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
  });

  it('should return 1 when a string has the same character repeated', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
  });

  it('should return correct value - number of characters of the substring, not the subsequence', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
  });
});
