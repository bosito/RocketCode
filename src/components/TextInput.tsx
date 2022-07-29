import { ChangeEventHandler, InputHTMLAttributes  } from 'react';
import './textInput.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type: 'email' | 'password';
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    labelValue?: string
};

export default function TextInput(props: Props) {
    const { placeholder, type, value, onChange, labelValue } = props;
    return (
        <div className="form__group field">
            <input
                type={type}
                className="form__field"
                placeholder={placeholder}
                id='name'
                required
                value={value}
                onChange={onChange}
            />
            <label className="form__label">{labelValue}</label>
        </div>
    );
};
