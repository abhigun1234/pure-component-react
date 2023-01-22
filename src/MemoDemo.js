import React from 'react';

function MemoDemo(props) {
    console.log("Memo component loading")
    return (
        <div>
            
        </div>
    );
}

export default React.memo(MemoDemo);