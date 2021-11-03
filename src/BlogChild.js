import React from 'react';
import {useContext } from "react";
import LocalContext from "./LocalContext";

function BlogChild() {

    const { local, toggleLocal } = useContext(LocalContext);

    return (
        <div className='BlogChild'>
            {/* <LocalContext.Consumer> // before useContex();
                {(data) => { // data => {local, toggleLocal};
                    return (
                        <Fragment>
                            <h1>Local Value Is {data.local}</h1>
                            <button onClick={data.toggleLocal}>Toggle Local</button>
                        </Fragment>
                    );
                }}
            </LocalContext.Consumer> */}
            <>
                <h1>Local Value Is {local}</h1>
                <button onClick={toggleLocal}>Toggle Local</button>
            </>
        </div>
    );
}

export default BlogChild;