import { Button } from './Button';

type IProps = {
    text: string;
    className?: string;
    onClick?: () => void;
};

export const SubmitButton = ({text, className, onClick}: IProps) => {
    return (
        <Button text={text} onClick={onClick} className={className} type={"submit"} />
    )
};