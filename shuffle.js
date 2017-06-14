(function($) {
	// shuffle function
	var shuffle = function(array) {

	    for (i=array.length-1; i>0; i--) {
	    	var randomIndex = Math.floor(Math.random()*(i+1));

	    	var temp = array[i];
	    	array[i] = array[randomIndex];
	    	array[randomIndex] = temp;
	    }

	    return array;
	};

	// Example: This should return false
	clearlyUnfairShuffle = function (array) {
	    return array;
	};

	/**
	 * Check if a given shuffle function is a fair.
	 * @param shuffleFunction {Function} A function that takes an array as an argument. It shuffles arrays.
	 * @returns {boolean} Whether or not this shuffle function fairly shuffles arrays.
	 */
	var isShuffleFair = function (shuffleFunction) {
	    // Do something with the shuffle function
	    var shuffledDeck = shuffleFunction([0, 1, 2, 3, 4, 5, 6, 7]);
	    // Compute whether or not the shuffle is fair. This may require calling shuffleFunction multiple times.
	    var isFair = false;

	    return isFair;
	};

	// logging unshuffled array
	var array = _.range(52);
	console.log('UnshuffledArray: ' + array);

	// logging shuffled array
	var shuffledArray = shuffle(array);
	console.log('ShuffledArary: ' + array);

	// tests for determining fairness of shuffle function
	var isClearlyUnfairShuffleFair = isShuffleFair(clearlyUnfairShuffle);
	if (!isClearlyUnfairShuffleFair) {
		console.log('correctly determined that the unfair shuffle is in fact unfair');
	}

	var isUnderscoreShuffleFair = isShuffleFair(shuffle);
	if (!isUnderscoreShuffleFair) {
	    console.error("Underscorejs's shuffle function is definitely fair.");
	}
})();
