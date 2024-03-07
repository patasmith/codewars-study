def fun_mask(string: str, pattern: str = "#") -> str:
    """Mask all but the last 4 characters of a string
    by repeating the given pattern.
    """

    length = len(string)
    if length < 4:
        return string
    else:
        length_to_mask = length - 4
        result = ""
        for i in range(length_to_mask):
            result += pattern[i % len(pattern)]
        return result + string[-4:]


def is_roman(string: str) -> bool:
    """Roman numeral validator.
    See https://www.thevbprogrammer.com/Ch08/08-10-RomanNumerals.htm for rules.
    """

    class Numeral:
        """A roman numeral."""

        def __init__(
            self,
            letter: str,
            value: int,
            appear_once: bool,
            subtractor: bool,
        ):
            self.letter = letter
            self.value = value
            self.appear_once = appear_once
            self.subtractor = subtractor

    numerals = [
        Numeral("M", 1000, False, False),
        Numeral("D", 500, True, False),
        Numeral("C", 100, False, True),
        Numeral("L", 50, True, False),
        Numeral("X", 10, False, True),
        Numeral("V", 5, True, False),
        Numeral("I", 1, False, True),
    ]

    return False
