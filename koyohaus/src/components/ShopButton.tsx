type ShopButtonProps ={
  color: string;
  border: string;
  text: string;
}

const ShopButton = ({
  color,
  border,
  text,
}: ShopButtonProps) => {
  return (
    <>
    {color === 'black' ?

    <a className="shopButton black" href="" style={{border:`${border} solid 1px`, backgroundColor: color, color: 'white'}}>
    <p className="text">{text}</p>
    <p  className="arrow">→</p>
    </a>
    
    :

    <a className="shopButton white" href="" style={{border:`${border} solid 1px`, backgroundColor: color, color:'black'}}>
    <p className="text">{text}</p>
    <p  className="arrow">→</p>
    </a>}
    </>
    
  )
}

export default ShopButton
