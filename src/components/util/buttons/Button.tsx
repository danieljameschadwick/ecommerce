type IProps = {
    text: string;
    className?: string;
    onClick?: () => void;
};

export const Button = ({text, className, onClick}: IProps) => {
    return (
        <button onClick={onClick} className={`button ${className ?? ''}`}>
            {text}
        </button>
    )
};