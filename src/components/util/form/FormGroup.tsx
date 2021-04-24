import { Field } from "formik";
import { useComponentVisible } from "../../../util/ui/UseComponentVisible";
import { Error } from "./Error";

interface IProps {
    name: string;
    label: string;
    input: string;
    required: boolean;
    placeholder?: string;
    children?: React.FC[]
};

export const FormGroup: React.FC = ({name, label, input = "input", required = true, placeholder = undefined, children = undefined}): IProps => {
    const { ref, setIsComponentVisible, isComponentVisible } = useComponentVisible(false);

    return (
        <div className={`form-group ${isComponentVisible ? 'active' : ''}`} ref={ref}>
            <label>
                {label}{required ? '*' : ''}:
            </label>

            <Field
                name={name}
                as={input}
                type={input}
                className={"input"}
                placeholder={placeholder}
                onClick={() => setIsComponentVisible(true)}
            >
                {children}
            </Field>

            <Error field={name} />
        </div>
    );
};
