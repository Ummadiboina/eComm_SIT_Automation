Feature: FreeSimNoAddress

  @Web
  Scenario Outline: FreeSimNoAddress

    Given I am an CFA user and Lands on shop page
    And Navigate to FreeSim page
    And I select 'iPads and Tablets' tab
    And I select <Surfer_Type> surfer and <sim_type> sim
    And I select 'Enter manually' and input <Flatnumber>, <Housename>, <Address1>, <Town>, <Postcode>
    And I input <Firstname>, <Lastname>, <Contact_number> in About You Section
    Then verify order number is displayed

    Examples:
      | Surfer_Type  | sim_type | Flatnumber | Housename | Address1 | Town  | Postcode  | Firstname | Lastname | Contact_number |
      | Light surfer | iPad     |         26 |       100 | slough   | Berks | SL111R1   | Test      | Accepta  |    07123456789 |