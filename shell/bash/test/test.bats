setup() {
    load 'test_helper/bats-support/load'
    load 'test_helper/bats-assert/load'
    # ... the remaining setup is unchanged

    # get the containing directory of this file
    # use $BATS_TEST_FILENAME instead of ${BASH_SOURCE[0]} or $0,
    # as those will point to the bats executable's location or the preprocessed file respectively
    DIR="$( cd "$( dirname "$BATS_TEST_FILENAME" )" >/dev/null 2>&1 && pwd )"
    # make executables in src/ visible to PATH
    PATH="$DIR/../src:$PATH"
}

@test "Add two numbers" {
    run math 2 2
    assert_output "2 + 2 = 4"
}

@test "Concatenate all arguments" {
    run concatenate a b c
    assert_output "abc"

    run concatenate 1 3 5 9 this is a sentence
    assert_output "1359thisisasentence"
}

@test "Show welcome message on first invocation" {
    run project
    assert_output --partial 'Welcome to our project!'

    run project
    refute_output --partial 'Welcome to our project!'
}

teardown() {
    rm -f /tmp/bats-tutorial-project-ran
}
