import pytest
from list_operations import only_one


def test_only_one():
    expected = [1, 2, 3, 4]
    actual = only_one([1, 2, 1, 3, 3, 3, 4, 3, 2])
    assert expected == actual
