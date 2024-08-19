// isSubsequence.js
function isSubsequence(str1, str2) {
	let str1Idx = 0;
	let str2Idx = 0;
  
	if (!str1) return true; // An empty string is always a subsequence
  
	while (str2Idx < str2.length) {
	  if (str2[str2Idx] === str1[str1Idx]) {
		str1Idx++;
	  }
	  if (str1Idx === str1.length) return true; // All characters of str1 found in str2
	  str2Idx++;
	}
  
	return false; // Not all characters of str1 found in str2
  }
  
  module.exports = isSubsequence;
  