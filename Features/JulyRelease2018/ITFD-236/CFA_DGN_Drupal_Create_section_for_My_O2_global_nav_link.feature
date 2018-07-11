Feature: CFA_DGN_Drupal_Create_section_for_My_O2_global_nav_link

  This scenario ensures that when an Acquisition customer lands on Drupal Global nav enabled Page and clicks on the 'My O2' link, then the customer should be displayed with 'My O2' Sign in section

  @Web

  Scenario Outline: CFA_DGN_Drupal_Create_section_for_My_O2_global_nav_link
    Given I am an CFA user and Lands on shop page
    And click on 'My O2' link
    Then validate 'My O2' page
    And navigate to PAYM Phones page
    And click on 'My O2' link
    Then validate 'My O2' page
    And navigate to PAYM Tablets page
    And click on 'My O2' link
    Then validate 'My O2' page
    And Navigate to PayM MBB page
    And click on 'My O2' link
    Then validate 'My O2' page
    And navigate to PAYM SIMO page
    And click on 'My O2' link
    Then validate 'My O2' page
    And Navigate to Accessories
    And click on 'My O2' link
    Then validate 'My O2' page
    And Navigate to Fitness Trackers
    And click on 'My O2' link
    Then validate 'My O2' page
    And Navigate to SmartWatches
    And click on 'My O2' link
    Then validate 'My O2' page
    And Navigate to sims and Ipad Sims page
    And click on 'My O2' link
    Then validate 'My O2' page
    And Navigate to sims and Tablet Sims page
    And click on 'My O2' link
    Then validate 'My O2' page
    # PayG navigations starts
    And navigate to Pay as you Go Phones page
    And click on 'My O2' link
    Then validate 'My O2' page
    And navigate to Pay as you Go Tablets page
    And click on 'My O2' link
    Then validate 'My O2' page
    And navigate to PayG SIMO page
    And click on 'My O2' link
    Then validate 'My O2' page
    And Navigate to PayG MBB page
    And click on 'My O2' link
    Then validate 'My O2' page
    #//--------Validating at Device details,Tariff&Extras, Basket and order confirmation page-------------
    And navigate to PAYM Phones page
    And I search for a PayM <handset> device
    And click on 'My O2' link
    Then validate 'My O2' page
    And Navigate to device details page
    And click on 'My O2' link
    Then validate 'My O2' page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on 'My O2' link
    Then validate 'My O2' page
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And click on 'My O2' link
    Then validate 'My O2' page
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>



    Examples:
      | handset   | Firstname | Surname | Username     | filtername | sortoption                 | consumer | B1  | B2  | B3  | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | Galaxy S9 | TEST      | ACCEPTA | TEST ACCEPTA | low        | Monthly data (High to low) | Me       | Not | Not | Not | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  |
