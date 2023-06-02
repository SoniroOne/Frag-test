# Frag Lab Logs Test

This project contains tests for the Frag game logs functionality. It verifies two main aspects of the logs: shoot amount equal to hit amount and unique hit entities.

## Getting Started

To run the tests, please follow the steps below:

1. Install the dependencies by running the following command:
npm install
2. Run the tests using the following command:
npm test

## Test Cases

The following test cases are included in the project:

1. **Shoot amount equal to hit amount:** This test case checks if the number of shoot events in the logs is equal to the number of hit events.
2. **Each Hit entity is unique:** This test case verifies that all hit events in the logs have uque entity IDs.

## Dependencies

The project relies on the following dependencies:

- `jest`: JavaScript testing framework.
- `fs`: File system module for reading log files.