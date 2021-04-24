import * as Yup from "yup";
import { FormGroup } from "../util/form/FormGroup";
import { FeatureSwitcher } from "../../util/core/FeatureSwitcher";
import { FEATURE } from "../../util/core/Feature";

const namespace = "contactDetails";

export const ContactDetails: React.FC = () => {
    const withNamespace = (fieldName: string) => {
        return namespace ? `${namespace}.${fieldName}` : fieldName;
    };

    return (
        <div className={"mb-3"}>
            <h2 className={"mb-3"}>
                Contact details
            </h2>

            <>
                <div className={"form-row grid grid-cols-2 gap-x-4"}>
                    <FormGroup
                        name={withNamespace("firstName")}
                        label={"First Name"}
                        placeholder={"First name"}
                    />

                    <FormGroup
                        name={withNamespace("lastName")}
                        label={"Last Name"}
                        placeholder={"Last name"}
                    />
                </div>

                <FormGroup
                    name={withNamespace("email")}
                    label={"Email address"}
                    placeholder={"me@example.com"}
                />

                {FeatureSwitcher.isEnabled(FEATURE.LOGIN) ? (
                    <div className={"mb-2 text-xs"}>
                        <span className={"link link--primary hover"}>Already have an account? Sign in.</span>
                    </div>
                ) : ""}
            </>
        </div>
    );
};