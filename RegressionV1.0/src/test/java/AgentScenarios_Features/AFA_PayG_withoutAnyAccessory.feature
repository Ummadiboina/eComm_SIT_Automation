Feature: Successful completion of a PAY G handset acquisition Journey without an accessory

  #launch hooks and get browser
  @AgentsRegression
  Scenario Outline: Successful completion of a PAY G handset acquisition Journey without an accessory
    Given I am an agent and login to Agent shop
    And performs new user new connection
    And Select a valid PAYG <Device>
    And Select valid <Tariffs> from tariffs tab
    And Select valid <Extras> from extras tab
    And Validate all the Basket content
    And choose to email basket to save the basket

    Examples: 
      | Device                   | Tariffs       | Extras           |
      | Samsung 32 GB black gold | Random Tariff | Random allowance |
