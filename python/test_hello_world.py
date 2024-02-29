from hello_world import hello_world


def test_hello_world():
    string = hello_world()
    assert string == "Hello world!"
