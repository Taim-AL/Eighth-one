import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AOS from 'aos';

export default function ControlledAccordions() {
  AOS.init();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div data-aos="fade-up" data-aos-duration="500">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='mt-3'
          style={{backgroundColor:"#f7f8f9"}}
        >
          <Typography sx={{ width: '8%', flexShrink: 0 }}>
            <strong className='interrogative' style={{color:"#2ea698"}}>1.</strong>
          </Typography>
          <Typography className='title-accordion'>Non consectetur a erat nam at lectus urna duis?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography className='about-accordion'>
          Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className='mt-3'
          style={{backgroundColor:"#f7f8f9"}}
        >
          <Typography sx={{ width: '8%', flexShrink: 0 }}><strong className='interrogative' style={{color:"#2ea698"}}>2.</strong></Typography>
          <Typography  className='title-accordion'>
          Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='about-accordion'>
          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className='mt-3'
          style={{backgroundColor:"#f7f8f9"}}
        >
          <Typography sx={{ width: '8%', flexShrink: 0 }}>
          <strong className='interrogative' style={{color:"#2ea698"}}>3.</strong>
          </Typography>
          <Typography  className='title-accordion'>
          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='about-accordion'>
          Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          className='mt-3'
          style={{backgroundColor:"#f7f8f9"}}
        >
          <Typography sx={{ width: '8%', flexShrink: 0 }}><strong className='interrogative' style={{color:"#2ea698"}}>4.</strong></Typography>
          <Typography  className='title-accordion'>
          Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='about-accordion'>
          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          className='mt-3'
          style={{backgroundColor:"#f7f8f9"}}
        >
          <Typography sx={{ width: '8%', flexShrink: 0 }}><strong className='interrogative' style={{color:"#2ea698"}}>5.</strong></Typography>
          <Typography  className='title-accordion'>
          Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='about-accordion'>
          Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}




