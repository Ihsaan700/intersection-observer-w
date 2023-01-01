Practicing with JS to disable a button in Webflow.

Key learnings:

- The default button in Webflow is an <a> tag and doesn't have the disable attribute, we need to use the form button which has the input type submit.
- input[type=submit] is also the css selector we must use to style the disabled state.
- Our code needs to have a wrapper script for it to work so the DOM has fired and is ready to be customised.
