Feature: AFU_Phones_checkout_in_progress_page_is_NOT_shown
  This scenario ensures that when the Agent on upgrade journey selects 'Phone'and tariff and closes the browser, then checkout in progress page should NOT be displayed when the customer logs online

  @Web
  Scenario Outline: AFU_Phones_checkout_in_progress_page_is_NOT_shown
    Given I login to Agent shop
    And performs Upgrade for <user>
    And the customer is presented with the targeted promotion tab at the end of the tabs
    And select a valid Handset and Tariff combination
    And I close the browser
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And 'Checkout In Progress' page is displayed

    Examples:
      | user | username | password |