import React from "react";

function Loading() {
    return (
        <div className="-translate-y-2/4 -translate-x-2/4" style={{"position": "fixed", "width": "100%", "height": "100%", "background": "rgba(255, 255, 255, 0.3)", "top": "50%", "left": "50%", "zIndex": "10"}}>
            <span className="text-[#390f99] loading loading-bars loading-lg absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4"></span>;
        </div>
    )
  }
  
export default Loading;