Feature: 59_Reg_CS_Free_Sim_iPad

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
      | Surfer_Type  | sim_type | Flatnumber | Housename | Surname | CheckBox | Address1 | Town  | Postcode | Firstname |
      | Light surfer | iPad     | 26         | 100       | Accepta | Yes      | slough   | Berks | Sl11er   | Test      |


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
      | Surfer_Type   | sim_type | Flatnumber | Housename | Address1 | Town  | Postcode | Firstname | Surname | Contact_number | CheckBox |
      | Steady surfer | iPad     | 26         | 100       | slough   | Berks | Sl11er   | Test      | Accepta | 07123456789    | No       |


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
      | Surfer_Type     | sim_type | Flatnumber | Housename | Address1 | Town  | Postcode | Firstname | Surname | Contact_number | CheckBox |
      | Ultimate surfer | iPad     | 26         | 100       | slough   | Berks | Sl11er   | Test      | Accepta | 07123456789    | No       |
#
#
#
#