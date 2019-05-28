Feature: Hacker News Search

Scenario: Searching Hacker News

    Given I open Hacker News's search page
    Then the title is "Hacker News"
    And the Hacker News search form exists
