(function(){"use strict";self.onmessage=function(n){const{word:s,currChar:t,currCharIndex:r}=n.data,e=s.split("")[r];e!==t&&e!==void 0&&postMessage({type:"increment"})}})();
