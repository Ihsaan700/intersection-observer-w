var Webflow = Webflow || [];
Webflow.push(function () {
  // DOMready has fired
  // May now use javascript and Webflow api

	const terms = document.querySelector("div.tc_text-wrapper");
	const button = document.querySelector("input[type=submit]");

	// html class for intersection observer to watch
	const watch = document.querySelector("span.watch");

	// a callback that is fired to check if something is on the page
	const ob = new IntersectionObserver(ob_call_back, {
		// root is that by which we are determining what we are scrolling with, rather than the default (body)
		root: terms,
		// threshold is a measure of how much the item is on the page, 1 is 100% on the page
		threshold: 1,
	})

	// payload is the output of information regarding the item we are watching
	function ob_call_back(payload) {
		// intersectionRatio is how much of the element we see on the page
		if (payload[0].intersectionRatio === 1) {
			button.disabled = false;
		} else {
			button.disabled = true;
		}
	}

	ob.observe(watch);

});
