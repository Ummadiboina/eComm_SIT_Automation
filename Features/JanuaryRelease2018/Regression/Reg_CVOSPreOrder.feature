Feature: CVOSPreOrder

  @Web
  Scenario Outline: PreOrder_CVS
    Given I am a Supply Chain Admin
    And I Login with Supply Chain Credential <username> and <Password>
    Then I click on  'Stockpot' tab in Supply Chain and search for <SKUID> in SkU desciption
    And Click on Search button
    Then I should see the uploaded stock for the SKU ID
    And I click on Online 'Stockpot' and move the delivery date to a past date
    And I click on Stock Merchandise
    Then I should be able to move the Launch date to a past date<Search_by_model>
    When I login as a Trading Admin
    And I Login with Trading Admin Credentials <Username1> and <Password1>
   # Then I click on  'Stockpot' tab in Trading admin and search for <SKUID> in SkU desciption
   # And when I click on All shops I should be able to allocate to different stockspots using <Search_by_model>
   # And I click on 'Stockpot' tab and search using <SKUID> to see the stock status then I should see them in Pre Order status

    Examples:
      | username          | Password          | SKUID    | Search_by_model        | Username1    | Password1     |
      | SupplyChainAdmin2 | SupplyChainAdmin1 | 1AMFI32N | Amazon Fire phone 32GB | TradingAdmin | TradingAdmin1 |
