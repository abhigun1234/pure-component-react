// import React from 'react';

// function MemoComp(props) {
//     console.log("rendering memo comp")
//     return (
//         <div>
//             Memo
//         </div>
//     );
// }

// export default React.memo(MemoComp);
import React from 'react';

function MemoComp(props) {
    console.log("Memo Comp getting called")
    return (
        <div>
            
        </div>
    );
}

export default  React.memo(MemoComp);