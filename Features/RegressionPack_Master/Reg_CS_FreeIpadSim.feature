Feature: Reg_CS_FreeIpadSim

  @ConsumerShop
  Scenario Outline: FreeSim entering delivery details manually
    Given I am an CFA user and Lands on shop page
    And Navigate to FreeSim page
    And I select 'iPads and Tablets' tab
    And I select Steady surfer 'ipad sims'
    And I select 'Enter manually' and input <Flatnumber>, <Housename>, <Address1>, <Town>, <Postcode>
    And I input <Firstname>, <Lastname>, <Contact_number> in About You Section
    Then verify order number is displayed

    Examples: 
      | Flatnumber | Housename | Address1 | Town  | Postcode | Firstname | Lastname | Contact_number |
      |         26 |       100 | slough   | Berks | Sl11er   | Test      | Accepta  |    07123456789 |

