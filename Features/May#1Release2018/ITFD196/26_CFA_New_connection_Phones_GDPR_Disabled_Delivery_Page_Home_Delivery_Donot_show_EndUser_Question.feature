Feature: 26_CFA_New_connection_Phones_GDPR_Disabled_Delivery_Page_Home_Delivery_Donot_show_EndUser_Question

  This Scenario ensures that when the Customer in Acquisition journey selects 'Phones'  with Home delivery, then the new Radio buttons to
  capture "Is this order for you or someone else?" and Marketing preferences should not be displayed

  @Web
  Scenario Outline: 26_CFA_New_connection_Phones_GDPR_Disabled_Delivery_Page_Home_Delivery_Donot_show_EndUser_Question
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I search for a PayM <handset> device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    #customer is either Me or Someone else
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | handset           | Firstname | Surname | Username     | filtername | sortoption                 | consumer | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | status   | MBBStatus | DeviceType |
      | Samsung Galaxy S8 | TEST      | ACCEPTA | TEST ACCEPTA | low        | Monthly data (High to low) | Me       | Not | Not | Not | Not | Not  | Not   | Not   | Not  | Disabled | No        | Connected  |

