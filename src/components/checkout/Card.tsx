export const Card: React.FC = () => {
    return (
        <div className="flex">
            <input
                type="text"
                id="payment"
                className="w-5/6 flex-1 text-sm text-black-base rounded-l p-3 focus:outline-none"
                placeholder="Card Number"
            />

            <input
                type="text"
                id="payment"
                className="w-1/6 inline-block text-sm text-black-base p-3 focus:outline-none"
                placeholder="MM / YY"
            />

            <input
                type="text"
                id="payment"
                className="w-1/6 inline-block text-sm text-black-base rounded-r p-3 focus:outline-none"
                placeholder="CVC"
            />
        </div>
    );
};