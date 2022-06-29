
interface IPaginationBtnProps {
    isActive?: boolean;
    onClick: any;
    number: number;
}

const PaginationBtn = ({isActive, onClick, number}:IPaginationBtnProps) => {
    return (
        <button
            style={{ backgroundColor: isActive ? 'green' : 'red', borderRadius: isActive ? '' : '50%' }}
            onClick={onClick}
        >
            {number}
        </button>
    )
};

export default PaginationBtn;
