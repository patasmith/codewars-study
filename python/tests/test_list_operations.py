from list_operations import only_one, power_of_three


def test_only_one_standard_array():
    expected = [1, 2, 3, 4]
    actual = only_one([1, 2, 1, 3, 3, 3, 4, 3, 2])
    assert expected == actual

    
def test_only_one_empty_array():
    expected = []
    actual = only_one([])
    assert expected == actual


def test_only_one_same_array():
    expected = ['a', 'b', 'c']
    actual = only_one(expected)
    assert expected.sort() == actual.sort()


def test_power_of_three():
    expected = [1, 8, 27, 64]
    actual = power_of_three([1, 2, 3, 4])
    assert expected == actual
