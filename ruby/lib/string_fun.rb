class StringFun

  def self.remove_nth(s, n = nil)
    if s.size < 2
      ""
    elsif n == 0
      s
    else
      s[1]
    end
  end
end
