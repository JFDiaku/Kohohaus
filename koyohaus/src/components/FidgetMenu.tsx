import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useMediaQuery } from '@mui/material';


type Props = {
    mode: String;
    handleNav: (value: string) => void;
}

const FidgetMenu = ({mode, handleNav}: Props) => {

  interface link{
    name: string
    to: string
    amount: number
  }


  const isDesktop = useMediaQuery("(min-width:1025px)");

  
  // Dropdown Nav Links//////
   const [Bycategories] = useState(() => [
    {name: 'Chairs and stools', to: '' , amount: Math.floor(Math.random() * 20) },
    {name: 'Lounge chairs', to: '' , amount: Math.floor(Math.random() * 20) },
    {name: 'Sofas', to: '' , amount: Math.floor(Math.random() * 20) },
    {name: 'Tables', to: '' , amount: Math.floor(Math.random() * 20) },
    {name: 'Coffee tables', to: '' , amount: Math.floor(Math.random() * 20) },
    {name: 'Complements', to: '' , amount: Math.floor(Math.random() * 20) },
    {name: 'All Products', to:'', amount: Math.floor(Math.random() * 20) }
  ]) 

      const [ByDesigners] = useState(() => [
      {name: 'Lorenzo Vélin', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Marcelle Dupré', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Ansel Reinhardt', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Gianna Bellini', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Henrik Vaals', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Otto Krell', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Gianna Bellini', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'All Designers', to:'', amount: Math.floor(Math.random() * 20) }
    ])
  
  
  
  
      const [ByMaterials] = useState(() => [
      {name: 'Lorenzo Vélin', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Marcelle Dupré', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Ansel Reinhardt', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Gianna Bellini', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Henrik Vaals', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Otto Krell', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Gianna Bellini', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'All Designers', to:'', amount: Math.floor(Math.random() * 20) }
    ])


   
 


 
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    


   return (
    <div className={'flex flex-col filtermenu' + (isDesktop ? ' desk' : '') + (mode !== 'inactive' ? ' show' : '')}>

        {!isDesktop && <div className={"filter" + (mode === 'filter' ?  " show" : "")}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography component="span" sx={{}}>
                BY CATEGORY
                </Typography>

            </AccordionSummary>
            <AccordionDetails>
        
                <div className='flex flex-col gap-2'>
                        {Bycategories.map((cat, index)=>
                <label key={index} className="flex items-center gap-2 text-sm ">
                    <input type="checkbox" name={cat.name} value={cat.name} />
                    {cat.name}           
                </label>)}
                </div>
                
                
            </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
            >
                <Typography component="span" sx={{ flexShrink: 0 }}>
                BY DESIGNER
                </Typography>
                
            </AccordionSummary>
            <AccordionDetails>
                <div className='flex flex-col gap-2'>
                    {ByDesigners.map((des, index)=>
                <label key={index} className="flex items-center gap-2 text-sm ">
                    <input type="checkbox" name={des.name} value={des.name} />
                    {des.name}
                    <p>({des.amount})</p>
                </label>
                )}
                </div>
            </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
            >
                <Typography component="span" sx={{ flexShrink: 0 }}>
                BY MATERIAL 
                </Typography>
                
            </AccordionSummary>
            <AccordionDetails>
                <div className='flex flex-col gap-2'>
                {ByMaterials.map((mat, index)=>
                <label key={index} className="flex items-center gap-2 text-sm ">
                    <input type="checkbox" name={mat.name} value={mat.name} />
                    {mat.name}
                    <p>({mat.amount})</p>
                </label>
                )}
                </div>
            </AccordionDetails>
            </Accordion>  

            <div className="Accordion-options border-t-1 border-black flex gap-4 items-center py-5 px-4 justify-end">
            <p onClick={()=>handleNav('inactive')} className='text-xs'><u>Clear all</u></p>

            <button onClick={()=>handleNav('inactive')} className='bg-black p-0 text-xs text-white px-6 py-3'>Seen products (260)</button>
            </div>
        </div>}
    



      
    </div>
  );
}

export default FidgetMenu