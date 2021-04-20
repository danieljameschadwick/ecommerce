import { Field } from "formik";
import { useComponentVisible } from "../../../util/ui/UseComponentVisible";

interface IProps {
    name: string;
    label: string;
    placeholder: string;
};

export const FormGroup: React.FC = ({name, label, placeholder}): IProps => {
    const { ref, setIsComponentVisible, isComponentVisible } = useComponentVisible(false);

    return (
        <div className={`form-group ${isComponentVisible ? 'active' : ''}`} ref={ref}>
            <label>
                {label}:
            </label>

            <Field 
                name={name}
                type={"input"}
                className={"input"}
                placeholder={placeholder}
                onClick={() => setIsComponentVisible(true)}
            />
        </div>
    );
};
