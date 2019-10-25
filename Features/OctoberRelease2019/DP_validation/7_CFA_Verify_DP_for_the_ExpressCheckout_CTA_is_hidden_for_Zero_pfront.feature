Feature: 07_CFA_Verify_DP_for_the_ExpressCheckout_CTA_is_hidden_for_Zero_pfront

  @Web
  Scenario Outline: CFA_Verify_DP_for_the_ExpressCheckout_CTA_is_hidden_for_Zero_pfront
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    #And click on the color dropdown
    #And verify the name of the colour is next to the colour tile in CFAPhoneColour
    #And select <color> color of the connected device
    And Build your plan with <upFront> <term> and <data>
    #And Click on Dont Select Cap My Bill CTA when BSC is <BSCstatus>
    And I Land on the basket page and choose home delivery option
    And Validate DP checkout CTA and copy text in Basket page in <journey> journey when <DPFlag> payment mode enabled and DP status is <DPStatus>
    And click on "go to checkout" button


    Examples:
      | handset   | Username     |   journey  |   DPFlag|  DPStatus| tariffAmt | dataValue | color        | Firstname | Surname | consumer | BSCstatus | B1     | B2  | B3  | B4  | Text   | Email | Phone | Post | GDPRstatus | MBBStatus | DeviceType | upFront | term | data | PreSelected | KeyEvent |
      | Galaxy S9 | Test Accepta |      CFA   |    Both |   Disable| £39       | 8GB       | Lilac Purple | Test      | Accepta | Me       | Enabled   | Select | Not | Not | Not | Select | Not   | Not   | Not  | Enabled    | No        | Connected  | min     | avg  | avg  | No          | No       |

