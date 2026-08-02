(function(){"use strict";self.onmessage=function(n){const{wpmKeyStrokes:t,countDownConstant:o,countDown:s}=n.data,c=t/5/(o-s+1)*60;postMessage(c)}})();
