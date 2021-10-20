import React, {useState} from 'react';

const LoadingComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = () => {
        if (!!name && !!email) {
            const data = { name, email };
            window.ReactNativeWebView?.postMessage(JSON.stringify(data));
        } else {
            console.log('cant submit empty fields')
        }
    };

    return (
        <div className="Loading">
            <p>
            This is the component.
            </p>
            <label>
                Name:
                <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
}

export default LoadingComponent;
