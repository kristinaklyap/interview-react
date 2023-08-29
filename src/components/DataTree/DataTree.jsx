import React from 'react';
import classes from "./DataTree.module.css"

const DataTree = ({data}) => {

    const {name, items } = data
    const hasChildren = items && items.length

    return (
        <>
            {data ?
            <div className={classes.tree_node}>
                {name}
                {hasChildren && items.map((item) => (
                    <DataTree key={item.name} data={item} />
                ))}
            </div>
                : <p>There is no data 😨</p>}
        </>

    )
}
export default DataTree
