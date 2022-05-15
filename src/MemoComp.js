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
console.log("Memo Comp getting called")
function MemoComp(props) {
    return (
        <div>
            
        </div>
    );
}

export default  React.memo(MemoComp);