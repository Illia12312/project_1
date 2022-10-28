import './sizeButton.css';

const SizeButton = ({type}) =>{
    return(
        <>
        <button className="sizeItemsButton">{type}</button>
        </>
    )
}

export default SizeButton;