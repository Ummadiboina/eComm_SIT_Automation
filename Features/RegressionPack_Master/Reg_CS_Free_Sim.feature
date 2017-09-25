Feature: Reg_CS_Free_Sim

  @ConsumerShop
  Scenario Outline: FreeSim entering delivery details manually
    Given I am an CFA user and Lands on shop page
    And Navigate to FreeSim page
    And I select 'iPads and Tablets' tab
    And I select <Surfer_Type> surfer and <sim_type> sim
    And I select 'Enter manually' and input <Flatnumber>, <Housename>, <Address1>, <Town>, <Postcode>
    And I input <Firstname>, <Lastname>, <Contact_number> in About You Section
    Then verify order number is displayed

    Examples: 
      | Surfer_Type     | sim_type | Flatnumber | Housename | Address1 | Town  | Postcode | Firstname | Lastname | Contact_number |
      | Light surfer    | iPad     |         26 |       100 | slough   | Berks | Sl11er   | Test      | Accepta  |    07123456789 |
      | Light surfer    | Tablet   |         26 |       100 | slough   | Berks | Sl11er   | Test      | Accepta  |    07123456789 |
      | Light surfer    | Dongle   |         26 |       100 | slough   | Berks | Sl11er   | Test      | Accepta  |    07123456789 |
      | Steady surfer   | iPad     |         26 |       100 | slough   | Berks | Sl11er   | Test      | Accepta  |    07123456789 |
      | Steady surfer   | Tablet   |         26 |       100 | slough   | Berks | Sl11er   | Test      | Accepta  |    07123456789 |
      | Steady surfer   | Dongle   |         26 |       100 | slough   | Berks | Sl11er   | Test      | Accepta  |    07123456789 |
      | Ultimate surfer | iPad     |         26 |       100 | slough   | Berks | Sl11er   | Test      | Accepta  |    07123456789 |
      | Ultimate surfer | Tablet   |         26 |       100 | slough   | Berks | Sl11er   | Test      | Accepta  |    07123456789 |
      | Ultimate surfer | Dongle   |         26 |       100 | slough   | Berks | Sl11er   | Test      | Accepta  |    07123456789 |
