import * as Yup from "yup";
import { FormGroup } from "../util/form/FormGroup";
import { FeatureSwitcher } from "../../util/core/FeatureSwitcher";
import { FEATURE } from "../../util/core/Feature";

export const DetailsSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
});

export const ContactDetails: React.FC = () => {
    return (
        <div className={"mb-3"}>
            <h2 className={"mb-3"}>
                Contact details
            </h2>

            <>
                <div className={"form-row grid grid-cols-2 gap-x-4"}>
                    <FormGroup
                        name={"firstName"}
                        label={"First Name"}
                        placeholder={"First name"}
                    />

                    <FormGroup
                        name={"lastName"}
                        label={"Last Name"}
                        placeholder={"Last name"}
                    />
                </div>

                <FormGroup
                    name={"email"}
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