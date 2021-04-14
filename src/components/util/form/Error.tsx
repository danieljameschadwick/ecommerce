import { ErrorMessage } from "formik";

interface IProps {
    field: string;
};

export const Error: React.FC = ({field}: IProps) => {
    return (
        <div className={"error"}>
            <ErrorMessage name={field} />
        </div>
    )
};
