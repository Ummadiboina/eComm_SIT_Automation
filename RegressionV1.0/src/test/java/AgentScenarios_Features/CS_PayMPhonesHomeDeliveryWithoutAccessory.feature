Feature: AFA PayM Phones Home delivery E2E journey

  #launch hooks and get browser
  @RegressionAFA
  Scenario Outline: AFA PayM Phones Home delivery E2E journey
    Given I am an AFA user and Lands on shop page
  

    #Close the browser
    Examples: 
      | handset  | Firstname | Surname | Username     |
      | GalaxyS7 | TEST      | ACCEPTA | TEST ACCEPTA |
