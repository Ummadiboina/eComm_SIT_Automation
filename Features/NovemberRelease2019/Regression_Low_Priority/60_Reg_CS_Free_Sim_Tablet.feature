Feature: 60_Reg_CS_Free_Sim_Tablet

  @Web
  Scenario Outline: Light surfer Tablet Sim entering delivery details manually
    Given I am an CFA user and Lands on shop page
    And Navigate to FreeSim page
    And I select 'iPads and Tablets' tab
    And I select <Surfer_Type> surfer and <sim_type> sim
    And I select 'Enter manually' and input <Flatnumber>, <Housename>, <Address1>, <Town>, <Postcode>
    #And I input <Firstname>, <Lastname>, <Contact_number> in About You Section
    And Enter details in Delivery Page <Firstname> and <Surname> for GDPR <CheckBox>
    Then verify order number is displayed

    Examples:
      | Surfer_Type  | sim_type | Flatnumber | Housename | Address1 | Town  | Postcode | Surname | CheckBox | Firstname | Lastname | Contact_number |
      | Light surfer | Tablet   | 26         | 100       | slough   | Berks | Sl11er   | Accepta | Yes      | Test      | Accepta  | 07123456789    |

  @Web
  Scenario Outline: Light surfer Dongle Sim entering delivery details manually
    Given I am an CFA user and Lands on shop page
    And Navigate to FreeSim page
    And I select 'iPads and Tablets' tab
    And I select <Surfer_Type> surfer and <sim_type> sim
    And I select 'Enter manually' and input <Flatnumber>, <Housename>, <Address1>, <Town>, <Postcode>
    #And I input <Firstname>, <Lastname>, <Contact_number> in About You Section
    And Enter details in Delivery Page <Firstname> and <Surname> for GDPR <CheckBox>
    Then verify order number is displayed

    Examples:
      | Surfer_Type  | sim_type | Flatnumber | Housename | Address1 | Town  | Postcode | Firstname | Lastname | Contact_number | Surname | CheckBox |
      | Light surfer | Dongle   | 26         | 100       | slough   | Berks | Sl11er   | Test      | Accepta  | 07123456789    | Accepta | Yes      |


  @Web
  Scenario Outline: Steady surfer Tablet Sim entering delivery details manually
    Given I am an CFA user and Lands on shop page
    And Navigate to FreeSim page
    And I select 'iPads and Tablets' tab
    And I select <Surfer_Type> surfer and <sim_type> sim
    And I select 'Enter manually' and input <Flatnumber>, <Housename>, <Address1>, <Town>, <Postcode>
    #And I input <Firstname>, <Lastname>, <Contact_number> in About You Section
    And Enter details in Delivery Page <Firstname> and <Surname> for GDPR <CheckBox>
    Then verify order number is displayed

    Examples:
      | Surfer_Type   | sim_type | Flatnumber | Housename | Address1 | Town  | Postcode | Firstname | Lastname | Contact_number | Surname | CheckBox |
      | Steady surfer | Tablet   | 26         | 100       | slough   | Berks | Sl11er   | Test      | Accepta  | 07123456789    | Accepta | No       |

  @Web
  Scenario Outline: Steady surfer Dongle Sim entering delivery details manually
    Given I am an CFA user and Lands on shop page
    And Navigate to FreeSim page
    And I select 'iPads and Tablets' tab
    And I select <Surfer_Type> surfer and <sim_type> sim
    And I select 'Enter manually' and input <Flatnumber>, <Housename>, <Address1>, <Town>, <Postcode>
    #And I input <Firstname>, <Lastname>, <Contact_number> in About You Section
    And Enter details in Delivery Page <Firstname> and <Surname> for GDPR <CheckBox>
    Then verify order number is displayed

    Examples:
      | Surfer_Type   | sim_type | Flatnumber | Housename | Address1 | Town  | Postcode | Firstname | Lastname | Contact_number | Surname | CheckBox |
      | Steady surfer | Dongle   | 26         | 100       | slough   | Berks | Sl11er   | Test      | Accepta  | 07123456789    | Accepta | Yes      |


  @Web
  Scenario Outline: Ultimate surfer Tablet Sim entering delivery details manually
    Given I am an CFA user and Lands on shop page
    And Navigate to FreeSim page
    And I select 'iPads and Tablets' tab
    And I select <Surfer_Type> surfer and <sim_type> sim
    And I select 'Enter manually' and input <Flatnumber>, <Housename>, <Address1>, <Town>, <Postcode>
    #And I input <Firstname>, <Lastname>, <Contact_number> in About You Section
    And Enter details in Delivery Page <Firstname> and <Surname> for GDPR <CheckBox>
    Then verify order number is displayed

    Examples:
      | Surfer_Type     | sim_type | Flatnumber | Housename | Address1 | Town  | Postcode | Firstname | Lastname | Contact_number | Surname | CheckBox |
      | Ultimate surfer | Tablet   | 26         | 100       | slough   | Berks | Sl11er   | Test      | Accepta  | 07123456789    | Accepta | No       |

  @Web
  Scenario Outline: Ultimate surfer Dongle Sim entering delivery details manually
    Given I am an CFA user and Lands on shop page
    And Navigate to FreeSim page
    And I select 'iPads and Tablets' tab
    And I select <Surfer_Type> surfer and <sim_type> sim
    And I select 'Enter manually' and input <Flatnumber>, <Housename>, <Address1>, <Town>, <Postcode>
    #And I input <Firstname>, <Lastname>, <Contact_number> in About You Section
    And Enter details in Delivery Page <Firstname> and <Surname> for GDPR <CheckBox>
    Then verify order number is displayed

    Examples:
      | Surfer_Type     | sim_type | Flatnumber | Housename | Address1 | Town  | Postcode | Firstname | Lastname | Contact_number | Surname | CheckBox |
      | Ultimate surfer | Dongle   | 26         | 100       | slough   | Berks | Sl11er   | Test      | Accepta  | 07123456789    | Accepta | Yes      |