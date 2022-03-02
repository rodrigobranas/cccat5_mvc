exports.calculateVolume = function (item) {
	const volume = (item.width/100 * item.height/100 * item.length/100);
	return volume;
};
