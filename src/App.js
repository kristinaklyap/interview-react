import React, {useState, useEffect, lazy} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {getData, postData} from "./utils/db";
import {update, remove} from "./utils/tree";

// import InteractiveDataTree from "./components/InteractiveDataTree/InteractiveDataTree";
import DataTree from "./components/DataTree/DataTree";
import Tree from "./components/Tree/Tree";
import Task from "./components/Task/Task";

import data from "./data.json";

import "./App.css";

const InteractiveDataTree = lazy(() => import("./components/InteractiveDataTree/InteractiveDataTree"));

export default function App() {
    const [rootNode, setRootNode] = useState()

    useEffect(() => {
        if (!rootNode) {
            const myData = async () => {
                try {
                    const data = await getData();
                    setRootNode(data.record);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
            myData()
        }
    }, [])


    const handleRemove = (e, whereAmI) => {
        e.preventDefault();
        const newItems = remove(whereAmI, rootNode.items)
        setRootNode({...rootNode, items: newItems})
        const updatedRoot = {...rootNode, items: newItems}
        postData(updatedRoot)
    }
    const handleAdd = (e, whereAmI) => {
        e.preventDefault();

        if (e.key === 'Enter') {
            const newRootItem = {
                name: e.target.value
            }

            const newItems = update(whereAmI, rootNode.items, newRootItem)
            setRootNode({...rootNode, items: newItems})
            const updatedRoot = {...rootNode, items: newItems}
            postData(updatedRoot)
            e.target.value = ''

        }
    }
    return (<div className="App">
        <header>
            <nav>
                <ul>
                    <li><a href={'/'}>Task</a></li>
                    <li><a href={'/tree'}>Tree</a></li>
                    <li><a href={'/data_tree'}>Data Tree</a></li>
                    <li><a href={'/interactive_data_tree'}>Interactive Data Tree</a></li>
                </ul>
            </nav>
        </header>
        <Router>
            <Routes>
                <Route path="/interactive_data_tree"
                       element={

                           <React.Suspense fallback={<>Loading...</>}>
                               <InteractiveDataTree
                                   handleRemove={handleRemove}
                                   handleAdd={handleAdd}
                                   {...rootNode}
                               />
                           </React.Suspense>

                       }/>
                <Route path="/data_tree" element={<DataTree data={data}/>}/>
                <Route path="/tree" element={<Tree/>}/>
                <Route path="/" element={<Task/>}/>
            </Routes>
        </Router>
    </div>);
}
