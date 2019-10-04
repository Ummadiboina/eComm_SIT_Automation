Feature: 86_Reg_Jan_FreeSim_InvalidPostCode_EnteredManually

  This ensures that a valid error message should get displayed when user enters invalid postcode in the enter manually section

  @Web
  Scenario Outline: This ensures that a valid error message should get displayed when user enters invalid postcode in the enter manually section

    Given I am an CFA user and Lands on shop page
    And Navigate to FreeSim page
    And I select 'iPads and Tablets' tab
    And I select <Surfer_Type> surfer and <sim_type> sim
    And I select 'Enter manually' and input <Flatnumber>, <Housename>, <Address1>, <Town>, <PostCode>
    Then the respective <error> message should be displayed in enter manually section

    Examples:
      | Surfer_Type  | sim_type | Flatnumber | Housename | Address1    | Town   | PostCode    | error                     |
      | Light surfer | iPad     | 26         | 100       | High Street | Slough | SL111ER1232 | Enter a valid UK postcode |