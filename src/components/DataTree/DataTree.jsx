import React from 'react';
import classes from "./DataTree.module.css"

const DataTree = ({data}) => {

    const {id,  name, items } = data
    const hasChildren = items && items.length

    return (
        <div className={classes.tree_node}>
            {name}
            {hasChildren && items.map((item) => (
                <DataTree key={item.id} data={item} />
            ))}
        </div>
    )
}
export default DataTree
