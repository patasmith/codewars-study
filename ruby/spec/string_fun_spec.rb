require "string_fun"

describe StringFun do

  describe ".remove_nth" do
    context "given an empty string" do
      it "returns an empty string" do
        expect(StringFun.remove_nth("")).to eql("")
      end
    end
  end
end
