Feature: FreeSim_CommercialAddress

  @Web

  Scenario Outline: FreeSim_CommercialAddress

    Given I am an CFA user and Lands on shop page
    And Navigate to FreeSim page
    And I select 'iPads and Tablets' tab
    And I select <Surfer_Type> surfer and <sim_type> sim
    And I select 'Enter manually' and input <Flatnumber>, <Housename>, <Address1>, <Town>, <Postcode>
    And enter a <houseNumber> and an <PostCode>
    Then the respective <error> message should be displayed

    Examples:
      | Surfer_Type  | sim_type | Flatnumber | Housename | Address1 | Town  | PostCode | Firstname | Lastname | Contact_number | houseNumber|
      | Light surfer | iPad     |         26 |       100 | slough   | Berks | SL1 1LN  | Test      | Accepta  |    07123456789 |       103     |