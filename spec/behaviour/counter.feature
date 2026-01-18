# DEMO: This file is part of the Counter demo.
# Delete this file when adding your own features.

Feature: Counter
  A counter tracks a numeric value that can be incremented, decremented, or reset.

  Scenario: New counter starts at zero
    Given I create a new counter
    Then the counter value should be 0

  Scenario: Increment increases the count by one
    Given a counter with value 0
    When I increment the counter
    Then the counter value should be 1

  Scenario: Increment from non-zero value
    Given a counter with value 5
    When I increment the counter
    Then the counter value should be 6

  Scenario: Increment by a specific amount
    Given a counter with value 3
    When I increment the counter by 7
    Then the counter value should be 10

  Scenario: Decrement decreases the count by one
    Given a counter with value 5
    When I decrement the counter
    Then the counter value should be 4

  Scenario: Decrement can go negative
    Given a counter with value 0
    When I decrement the counter
    Then the counter value should be -1

  Scenario: Reset returns counter to zero
    Given a counter with value 10
    When I reset the counter
    Then the counter value should be 0

  Scenario: Multiple operations
    Given a counter with value 0
    When I increment the counter 3 times
    And I decrement the counter 1 time
    Then the counter value should be 2
