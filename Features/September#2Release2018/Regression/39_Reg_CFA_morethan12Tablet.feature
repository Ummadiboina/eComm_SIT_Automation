Feature: 39_Reg_CFA_morethan12Tablet

  @Web
  Scenario Outline: E11522_CFA_MoreThan12Accessory_Tablet: Removing previously selected standalone non-connected items from my basket if the amount exceeds 12 when more non-connected items are added in a device led journey

    Given I am an CFA user and Lands on shop page
    And Navigate to Accessories
    And Select <accessoryname> from accessories
    And add quantity of accessories to basket within <limit1> in details page and navigate to basket
    And Verify the device <accessoryname> in basket
    And click on continue shopping button
    And Navigate to Fitness Trackers
    And I choose <fitnesstrackername> FitnessTracker
    And add quantity of FitnessTracker to basket within <limit2> in details page and navigate to basket
    And Verify the devices <accessoryname> and <fitnesstrackername> in basket
    And calculate the total quantity of devices added to basket
    And click on continue shopping button
    And navigate to PAYM Tablets page
    #And I choose <tabletname> Tablet
    And Select PayM Tablet <tabletname>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Click on Dont Select Cap My Bill CTA when BSC is <BSCstatus>
    #And Choose Accesssory
    #And I Land on the basket page by clicking on Add to Basket button
    And Land on the basket page by clicking on Add to Basket button
    And the previously selected standalone non-connected items should be removed from my basket
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | Firstname | Surname | Username     | BSCstatus | limit1 | tabletname            | color      | capacity | limit2 | accessoryname | fitnesstrackername | consumer | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | TEST      | ACCEPTA | TEST ACCEPTA | Enabled   | 6      | Galaxy Tab A 2016 7.0 | Space Grey | 256GB    | 6      | AirPods       | Fitbit Ionic       | Someone  | Not | Not | Not | Not | Not  | Not   | Not   | Not  | Enabled | No        | Connected  |
