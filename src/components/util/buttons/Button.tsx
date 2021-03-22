type IProps = {
    text: string;
    className?: string;
    onClick?: () => void;
    type?: string;
};

export const Button = ({text, className, onClick, type}: IProps) => {
    return (
        <button onClick={onClick} className={`button ${className ?? ''}`} type={type !== undefined ? type : ''}>
            {text}
        </button>
    )
};