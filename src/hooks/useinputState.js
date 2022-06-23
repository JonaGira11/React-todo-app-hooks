import {useState} from 'react';

export default initailVal => {
    const [value, setValue] = useState(initailVal);
    const handleChange = e => {
        setValue(e.target.value);
    };
    const reset = ()=> {
        setValue("")
    };
    return [value, handleChange, reset];
};
