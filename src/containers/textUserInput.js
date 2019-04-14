import React from 'react'

export default function textUserInput(props) {
    return (
        <div>
            <div className="textInputUser">
            <input
                placeholder="Between 2000..."
                type="text"
                onChange={props.HandleSearch}
                name="researchyear1"
                defaultValue={props.state.researchyear1}
            >
            </input>
            <p>2) Enter two specific years</p>
            <input
                placeholder="... and today."
                type="text"
                onChange={props.HandleSearch}
                name="researchyear2"
                defaultValue={props.state.researchyear2}
            >
            </input>
            </div>
            <div className="textInputUser">
                <input
                    placeholder="From 0..."
                    type="text"
                    onChange={props.HandleSearch}
                    name="researchrating1"
                    defaultValue={props.state.researchrating1}
                >
                </input>
                <p>3) Enter two specific ratings</p>
                <input
                    placeholder="... to 10."
                    type="text"
                    onChange={props.HandleSearch}
                    name="researchrating2"
                    defaultValue={props.state.researchrating2}
                >
                </input>
            </div>
            <div className="textInputUser">
                <input
                    placeholder="Between 60..."
                    type="text"
                    onChange={props.HandleSearch}
                    name="researchruntime1"
                    defaultValue={props.state.researchruntime1}
                >
                </input>
                <p>4) Enter two specific runtimes (in minutes).</p>
                <input
                    placeholder="... and 240."
                    type="text"
                    onChange={props.HandleSearch}
                    name="researchruntime2"
                    defaultValue={props.state.researchruntime2}
                >
                </input>
            </div>
        </div>
        
    )
}