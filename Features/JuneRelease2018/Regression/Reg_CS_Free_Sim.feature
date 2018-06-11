Feature: Reg_CS_Free_Sim

  @Web
  Scenario Outline: Light surfer iPad Sim entering delivery details manually
    Given I am an CFA user and Lands on shop page
    And Navigate to FreeSim page
    And I select 'iPads and Tablets' tab
    And I select <Surfer_Type> surfer and <sim_type> sim
    And I select 'Enter manually' and input <Flatnumber>, <Housename>, <Address1>, <Town>, <Postcode>
    #And I input <Firstname>, <Lastname>, <Contact_number> in About You Section
    And Enter details in Delivery Page <Firstname> and <Surname> for GDPR <CheckBox>
    Then verify order number is displayed

    Examples:
      | Surfer_Type  | sim_type | Flatnumber | Housename | Surname | CheckBox | Address1 | Town  | Postcode | Firstname | Lastname | Contact_number | consumer | B1  | B2  | B3  | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | Light surfer | iPad     | 26         | 100       | Accepta | Yes      | slough   | Berks | Sl11er   | Test      | Accepta  | 07123456789    | Me       | Not | Not | Not | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |

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