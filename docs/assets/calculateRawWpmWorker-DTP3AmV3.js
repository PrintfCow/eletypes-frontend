(function(){"use strict";self.onmessage=function(n){const{rawKeyStrokes:o,countDownConstant:t,countDown:s}=n.data,e=Math.round(o/5/(t-s+1)*60);postMessage(e)}})();
