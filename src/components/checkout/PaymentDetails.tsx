import { useState } from "react";
import { Card } from "./Card";

const CREDIT_DEBIT = "CREDIT_DEBIT";

export const PaymentDetails: React.FC = () => {
    const [ payment, setPayment ] = useState<string | undefined>(undefined);

    if (undefined === payment) {
        return (
            <div className="mb-3">
                <h2 className={"mb-3"}>Payment details</h2>

                <span onClick={() => setPayment(CREDIT_DEBIT)}>
                    Credit/Debit
                </span>
            </div>
        );
    }

    return (
        <div className={"mb-3"}>
            <h2 className={"mb-3"}>Payment details</h2>

            {
                {
                    CREDIT_DEBIT: <Card />,
                }[payment]
            }
        </div>
    );
};
