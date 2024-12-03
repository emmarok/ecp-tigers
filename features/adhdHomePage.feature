Feature: Home ADHD Page functionality
  @test
  Scenario: Verify ADHD page functionality
  Given I am on the ADHD home page    
  Then the page title should contain "Reboot Hackathon"

  Scenario: Validate the budget spend for each category
  Given I am on the ADHD home page
  Then validate the budget wheel
  Then validate the expenses for each category for the current quarter
  And I validate the remaining this month value

  Scenario: Validate the Rebudget Groceries functioanlity
  Given I am on the ADHD home page
  When I click on Rebudget Groceries buton
  Then I see move monthly budget popup
  And I can set the monthly food budget category

Scenario: Validate the Distraction Free Mode Preferences functioanlity
  Given I am on the ADHD home page
  When I click on Analyze button
  Then I can see Distraction Free Mode Preferences sidebar
  And I validate Preferences for each category
  When I increase or decrease value for selected category
  And I select the notification method for communication
  And I click on Submit button
  Then I validate confirmation popup with the changes
  





