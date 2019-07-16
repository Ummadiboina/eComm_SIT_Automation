Feature: 84_Reg_Jan_FreeSim_CommercialAddress

  @Web

  Scenario Outline: Error message displayed on entering commercial address while doing address lookup for Free Sim Order

    Given I am an CFA user and Lands on shop page
    And Navigate to FreeSim page
    And I select 'iPads and Tablets' tab
    And I select <Surfer_Type> surfer and <sim_type> sim
    And enter a <houseNumber> and an <PostCode> in Delivery section
    Then respective <error> message displayed in address look up section for using commercial address

    Examples:
      | Surfer_Type  | sim_type | PostCode | houseNumber | error                                                                |
      | Light surfer | iPad     | SL1 1XW  | 12          | Looking for a business address? Please use your home address instead |
