Feature: 121_FR_Mix_CFU_Phone.feature

  @Web
  Scenario Outline: 121_FR_Mix_CFU_Phone
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    #And Navigate to upgrade phone
    And choose to upgrade any Phone in My upgrade page
    And Click on 'Get Started' CTA
    And Click on View all Phones link in upgrade options page
    And I choose PayM <handset>
    And Build your plan with <upFront> <term> and <data>
    #And Click on Dont Select Cap My Bill CTA when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>

    Examples:
      | username                                    | password | handset  | upFront | term | data | Action | Firstname | Surname | Username     | filtername | BSCstatus | sortoption                 | tabletname | consumer | B1     | B2  | B3  | B4  | Text | Email  | Phone | Post | status  | MBBStatus | DeviceType | PreSelected |
      | rbmuatlokesh_donotusee4564@stf.ref.o2.co.uk | test123  | iPhone X | min     | min  | min  | skip   | TEST      | ACCEPTA | TEST ACCEPTA | low        | Disabled  | Monthly data (High to low) | A3 10      | Me       | Select | Not | Not | Not | Not  | Select | Not   | Not  | Enabled | No        | Connected  | No          |


