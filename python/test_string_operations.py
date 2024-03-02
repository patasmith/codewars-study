from string_operations import fun_mask


def test_fun_mask_empty_string():
    expected = ""
    actual = fun_mask("")
    assert expected == actual


def test_fun_mask_one_char_pattern():
    expected = "&&&&&pple"
    actual = fun_mask("pineapple", "&")
    assert expected == actual


def test_fun_mask_two_char_pattern():
    expected = "v^v^v^v^v^vtern"
    actual = fun_mask("zig-zag pattern", "v^")
    assert expected == actual


def test_fun_mask_huge_pattern():
    expected = "5mall"
    actual = fun_mask("small", "5432109876")
    assert expected == actual
