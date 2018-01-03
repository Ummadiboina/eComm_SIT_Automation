Feature: Reg_CS_Free_Sim

  @Web
  Scenario Outline: Light surfer iPad Sim entering delivery details manually
    Given I am an CFA user and Lands on shop page
    And Navigate to FreeSim page
    And I select 'iPads and Tablets' tab
    And I select <Surfer_Type> surfer and <sim_type> sim
    And I select 'Enter manually' and input <Flatnumber>, <Housename>, <Address1>, <Town>, <Postcode>
    And I input <Firstname>, <Lastname>, <Contact_number> in About You Section
    Then verify order number is displayed

    Examples:
      | Surfer_Type  | sim_type | Flatnumber | Housename | Address1 | Town  | Postcode | Firstname | Lastname | Contact_number |
      | Light surfer | iPad     |         26 |       100 | slough   | Berks | Sl11er   | Test      | Accepta  |    07123456789 |
      | Steady surfer | iPad     |         26 |       100 | slough   | Berks | Sl11er   | Test      | Accepta  |    07123456789 |
      | Steady surfer | iPad     |         26 |       100 | slough   | Berks | Sl11er   | Test      | Accepta  |    07123456789 |


 # Scenario Outline: Steady surfer iPad Sim entering delivery details manually
 #   Given I am an CFA user and Lands on shop page
 #   And Navigate to FreeSim page
 #   And I select 'iPads and Tablets' tab
 #   And I select <Surfer_Type> surfer and <sim_type> sim
 #   And I select 'Enter manually' and input <Flatnumber>, <Housename>, <Address1>, <Town>, <Postcode>
 #   And I input <Firstname>, <Lastname>, <Contact_number> in About You Section
 #   Then verify order number is displayed

 #   Examples:
 #     | Surfer_Type   | sim_type | Flatnumber | Housename | Address1 | Town  | Postcode | Firstname | Lastname | Contact_number |
 #     | Steady surfer | iPad     |         26 |       100 | slough   | Berks | Sl11er   | Test      | Accepta  |    07123456789 |

#   Scenario Outline: Ultimate surfer iPad Sim entering delivery details manually
#    Given I am an CFA user and Lands on shop page
#    And Navigate to FreeSim page
#    And I select 'iPads and Tablets' tab
#    And I select <Surfer_Type> surfer and <sim_type> sim
#    And I select 'Enter manually' and input <Flatnumber>, <Housename>, <Address1>, <Town>, <Postcode>
#    And I input <Firstname>, <Lastname>, <Contact_number> in About You Section
#    Then verify order number is displayed
#
#    Examples:
#      | Surfer_Type     | sim_type | Flatnumber | Housename | Address1 | Town  | Postcode | Firstname | Lastname | Contact_number |
#      | Steady surfer | iPad     |         26 |       100 | slough   | Berks | Sl11er   | Test      | Accepta  |    07123456789 |
#
#
#
#