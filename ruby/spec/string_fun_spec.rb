require "string_fun"

describe StringFun do

  describe ".remove_nth" do
    context "given an empty string" do
      it "returns an empty string" do
        expect(StringFun.remove_nth("")).to eql("")
      end
    end

    context "given no ordinal" do
      it "returns an empty string when given a string of length 1" do
        expect(StringFun.remove_nth("x")).to eql("")
      end
      it "returns the last character of a 2-character string" do
        expect(StringFun.remove_nth("xy")).to eql("y")
      end
    end

    context "given the ordinal 0" do
      it "returns the string unmodified" do
        expect(StringFun.remove_nth("my cool string", 0)).to eql("my cool string")
      end
    end  
    
    context "given the ordinal 1" do
      it "returns the string with first character removed" do
        expect(StringFun.remove_nth("xy", 1)).to eql("y")
      end
    end  

    context "given the ordinal 2" do
      it "returns the string with second character removed" do
        expect(StringFun.remove_nth("xy", 2)).to eql("x")
      end
    end

    context "given a string and a number n" do
      it "returns the string with the nth character removed" do
        expect(StringFun.remove_nth("hello world", 6)).to eql("helloworld")
        expect(StringFun.remove_nth("wonderful", 9)).to eql("wonderfu")
      end
    end
  end
end
