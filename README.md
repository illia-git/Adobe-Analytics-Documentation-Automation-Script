# Adobe Analytics Documentation Automation Script

## Overview
This script was developed during a work contract at Efigence to cater to personal needs. Its primary purpose is to automate and expedite the process of creating documentation by extracting values from the table in Adobe Analytics property settings, specifically from the "Success Events" section located at Admin > Report Suite Manager.

## Features
- Extracts visible text content from specified elements in the "Success Events" table.
- Provides three different methods for parsing the table, allowing users to choose the most suitable one.
- Automatically copies the extracted data to the clipboard for easy pasting into documentation or other platforms.
- Handles errors gracefully and provides feedback to the user.

## How to Use
1. Navigate to Adobe Analytics and go to Admin > Report Suite Manager > Success Events.
2. Open your browser's developer console.
3. Copy and paste the entire script into the console and press Enter.
4. A prompt will appear asking you to choose a script to execute (1, 2, or 3). Each number corresponds to a different method of parsing the table.
5. After making a choice, the script will execute and the extracted data will be copied to your clipboard.
6. If an error occurs during execution, it will be logged in the console.

## Parsing Methods
1. Extracts text content from elements with IDs starting with `event_name_` in the `success_event_table`.
2. Extracts text content from elements with IDs starting with `event_row_event`.
3. Extracts text content from the third child element's `div` with an ID ending in `_text_div_id` in each row of the `success_event_table`.

## Note
This script is designed for specific versions of the Adobe Analytics platform. If the structure of the "Success Events" page changes in future updates, the script may need adjustments to function correctly.
