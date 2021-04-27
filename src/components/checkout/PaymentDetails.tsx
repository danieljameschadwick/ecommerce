import { useState } from "react";
import { Card } from "./Card";
import { ReactSVG } from "react-svg";

const CREDIT_DEBIT = "CREDIT_DEBIT";

export const PaymentDetails: React.FC = () => {
    const [ payment, setPayment ] = useState<string | undefined>(undefined);

    if (undefined === payment) {
        return (
            <div className="mb-3">
                <h2 className={"mb-3"}>Payment details</h2>

                <div className="payment-options">
                    <div className={"payment-option"} onClick={() => setPayment(CREDIT_DEBIT)}>
                        <ReactSVG
                            src="www/images/payment/credit_card.svg"
                            className={"media"}
                        />

                        Credit/Debit
                    </div>
                </div>
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
