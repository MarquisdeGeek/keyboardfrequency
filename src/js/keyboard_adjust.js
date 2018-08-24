function adjust(freqlist) {
	var freq_min = 100;
	var freq_max = 0;

	// Find largest and small percentages
	for(var i=0;i<26;++i) {
		if (freqlist[i] > freq_max) {
			freq_max = freqlist[i];
		}
		if (freqlist[i] < freq_min) {
			freq_min = freqlist[i];
		}
	}

	// Rescale to a nice visual size
	var width_min = 12;
	var width_max = 128;

	for(var i=0;i<26;++i) {
		var div = '.letter_' + String.fromCharCode(97 + i);
		var w = ((freqlist[i]-freq_min)/(freq_max-freq_min)) * (width_max - width_min);
		w += width_min;
		w =Math.floor(w);
		if (isNaN(w)) { // When the frequencies are all equals, the width is computed as 0/0, or NaN.
			w = 40;
		}
		var h = w;

		$('#keyboard '+div).css("width", w+"px");
		$('#keyboard '+div).css("height", h+"px");
	}
}
