import React, { useState } from 'react'
import { contract } from "../../../declarations/contract";
function Mint() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !text) return;
        sendMessage({ name, text })
    };

    const sendMessage = async ({ text, name }) => {
        const newMessage = await contract.write(text, name)
        console.log(newMessage);
    }

    return (
        <section className="section">
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <h5>Submit</h5>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        name
                    </label>
                    <input
                        type="text"
                        className="form-input"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="text" className="form-label">
                        Text
                    </label>
                    <input
                        type="text"
                        className="form-input"
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-block">
                    Submit
                </button>
            </form>
        </section>
    )
}

export default Mint