require "string_fun"

describe StringFun do

  describe ".remove_nth" do
    context "given an empty string" do
      it "returns an empty string" do
        expect(StringFun.remove_nth("")).to eql("")
      end
    end

    context "given a string of length 1" do
      it "returns an empty string" do
        expect(StringFun.remove_nth("x")).to eql("")
      end
    end

    context "given a string of length 2" do
      it "returns the last character" do
        expect(StringFun.remove_nth("xy")).to eql("y")
      end
    end

    context "given a 2-character string and the number 0" do
      it "returns the string unmodified" do
        expect(StringFun.remove_nth("xy", 2)).to eql("xy")
      end
    end  
    
    context "given a 2-character string and the number 1" do
      it "returns the last character" do
        expect(StringFun.remove_nth("xy", 2)).to eql("y")
      end
    end  

    context "given a 2-character string and the number 2" do
      it "returns the first character" do
        expect(StringFun.remove_nth("xy", 2)).to eql("x")
      end
    end        
  end
end
