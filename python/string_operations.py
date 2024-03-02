def fun_mask(string, pattern="#"):
    length = len(string)
    if length < 4:
        return string
    else:
        length_to_mask = length - 4
        result = ""
        for i in range(length_to_mask):
            result += pattern[i % len(pattern)]
        return result + string[-4:]
