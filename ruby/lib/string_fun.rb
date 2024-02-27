##
# Methods for practicing string operations and testing.
#

class StringFun

  # Removes the nth character of a String.
  # If no character indicated, remove the first character by default.
  # If given a 0, no character is removed.
  #
  # @param s [String] the string to operate on
  # @param n [Integer] an ordinal number indicating the character to remove
  def self.remove_nth(s, n = 1)
    if n == 0
      s
    else
      s.slice!(n - 1); s
    end
  end
end
