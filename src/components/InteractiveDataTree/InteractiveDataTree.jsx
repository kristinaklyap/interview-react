import React from 'react';
import classes from "./InteractiveDataTree.module.css"

const InteractiveDataTree = (data) => {

    const {name, whereAmI = [], items, handleRemove, handleAdd} = data
    const hasChildren = items && items.length

    return (
        <>
            {data.name &&
                <div className={classes.tree_node}>
                    {whereAmI.length > 0 && <button onClick={e => handleRemove(e, whereAmI)}> ❌ </button>}
                    {name}
                    {hasChildren > 0 && items.map((item, index) => (
                        <InteractiveDataTree
                            key={index}
                            whereAmI={[...whereAmI, index]}
                            {...item}
                            handleAdd={handleAdd}
                            handleRemove={handleRemove}/>
                    ))}
                    {whereAmI &&
                        <input onKeyUp={e => handleAdd(e, whereAmI)} placeholder={`new level under: ${name}`}/>}
                </div>
            }
        </>
    )
}
export default InteractiveDataTree
