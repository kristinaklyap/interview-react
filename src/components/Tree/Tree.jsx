import React, {useState, useEffect} from 'react';

import classes from "./Tree.module.css"

const Tree = () => {
    return (
        <>
            <section>
                <h3> Original</h3>
                <hr />
                <div className={classes.tree}>
                    root<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;ant <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;bear <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cat <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dog <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elephant <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;frog <br/>
                </div>
            </section>

            <section>
                <hr />
                <h3> Tree styled with css </h3>
                <hr />
                <div className={`${classes.tree} ${classes.tree_2}`}>
                    <ul>
                        <li>root</li>
                        <li>
                            <ul>
                                <li>ant</li>
                                <li>bear</li>
                                <li>
                                    <ul>
                                        <li>cat</li>
                                        <li>dog</li>
                                        <li>
                                            <ul>
                                                <li>elephant</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>frog</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>

        </>

    )
}

export default Tree;
