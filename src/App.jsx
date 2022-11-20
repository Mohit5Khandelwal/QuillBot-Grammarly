import React from 'react';
import { AppBar, CssBaseline, Toolbar, Typography , Box , IconButton ,Button , Container , Grid , List , ListItem , Stack} from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import {  purple } from '@mui/material/colors';
import DoneIcon from '@mui/icons-material/Done';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import gricon from './grammarly_icon.ico';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import gmm from './gmm.jpg'

const longText = `
MOHIT KHANDELWAL 19UEC015
`;

const itemData = [
    {
      img: gmm,
      title: 'ICON',
    },
];

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500]
        }
    },
});



const style = {
    width: '100%',
    maxWidth:400,
    flexWrap:5,
    bgcolor: 'background.paper',

  };

    const darkTheme = createTheme({
    palette: {

        primary: {
            main:'#FFFFFF',
        },
    },
    });

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    width:'20vw',
    color: theme.palette.text.secondary,
  }));
  






const App = () => {

    return (
            <>

            <CssBaseline/>

                {/* Navigation Bar  */}

            <Box sx={{ flexGrow: 3 }}>
            <ThemeProvider theme={darkTheme}>
                    <AppBar position="static" >
                        <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{ mr: 1 }}
                        >
                        </IconButton>
                        <img src = { gricon } width={30} />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 , fontWeight:"bold" , ml:1 }}>
                            grammarly
                        </Typography>
                        <Box width = 'auto'  height = 'auto' bgcolor = 'white' sx = {{

                            '&:hover': {
                                background: 'linear-gradient(45deg, skyblue 10%, whitesmoke 50%)',
                                opacity: [0.9, 0.8, 0.7],
                                fontSize: '20',
                                borderRadius: 3,
                                boxShadow: '0 3px 5px 2px rgba(100, 400, 150, .5)',
                                width: '15',

                            }


                            }}>
                        <Button color="inherit">
                            <Typography sx={{ fontWeight:"bold" }}>
                                Log in
                            </Typography>
                        </Button>
                        </Box>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
                
            </Box>

                <main>
                    <Container fixed maxWidth = "md">
                        <Box sx={{  height: '30vh' }} >

                            <Typography varient = "h2" fontSize={ 50 } align = "center" paddingTop={5} fontWeight='bold'>
                            Aim High With Brilliant Writing
                            </Typography>

                            <Box sx={{  height :"10vh" , pt:2 , pl:25 }}>

                            <Button variant="contained"  size = "large" color="success" >
                                <Typography variant="p"  align = "center" fontWeight='bold' padding={1}>
                                    Upgrade to Gammarly Premium
                                </Typography>
                            </Button>

                            </Box>

                        </Box>
                
                    </Container>

                        {/* Adding Part-2 List & Content Box */}

                        <container fixed >
                            <Box sx={{  height: '40vh' }} >
                                <Grid container spacing={2} >
                                    <Grid item xs={5} md={5} margin={4}>
                                        
                                        <Box width='20vw' p={5} height='30vh'  ml={20} mt={-8} position='relative'>

                                              
                                        <Tooltip title={longText} interactive>

                                                    
                                            <ImageList sx={{ width: 800 , height: 1000 }} cols={2} rowHeight={164}>
                                                        {itemData.map((item) => (
                                                            <ImageListItem key={item.img}>
                                                            <img
                                                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                                alt={item.title}
                                                                loading="lazy"
                                                            />
                                                            </ImageListItem>
                                                        ))}
                                                        </ImageList>
                                                    
                                                </Tooltip>

                                      
                                        </Box>
                                      
                                    
                                    </Grid>


                                    <Grid item xs={5} md={5} margin={1} >
                                    <List sx={style} component="nav" aria-label="mailbox folders">

                                        <Box width = 'auto'  height = 'auto' bgcolor = 'white' sx = {{

                                                '&:hover': {
                                                    background: 'linear-gradient(45deg, skyblue 10%, whitesmoke 50%)',
                                                    opacity: [0.9, 0.8, 0.7],
                                                    fontSize: '20',
                                                    borderRadius: 3,
                                                    boxShadow: '0 3px 5px 2px rgba(100, 400, 150, .5)',
                                                    width: '15',
                                                
                                                }


                                        }}> 

                                        <ListItem >
                        
                                                <Typography fontSize={20} fontWeight='bold' color={'blue'} sx={{ 
                                                }}>
                                                    Clear,confident communication
                                                    
                                                </Typography>
                                    
                                        </ListItem>


                                        
                                        
                                        <ListItem >
                                            <Typography marginTop={-2} marginBottom={1.5}>
                                            Take the guess work out of great learning
                                                    
                                            </Typography>

                                        </ListItem>

                                       

                                        <Divider />

                                        </Box>

                                        <Box width = 'auto'  height = 'auto' bgcolor = 'white' sx = {{

                                            '&:hover': {
                                                background: 'linear-gradient(45deg, skyblue 10%, whitesmoke 50%)',
                                                opacity: [0.9, 0.8, 0.7],
                                                fontSize: '20',
                                                borderRadius: 3,
                                                boxShadow: '0 3px 5px 2px rgba(100, 400, 150, .5)',
                                                width: '15',

                                            }


                                            }}> 

                                        <ListItem>
                                            <Typography fontSize={20} fontWeight='bold' color={'blue'} marginTop={1}>
                                                Comprehensive real-time feedback
                                                
                                            </Typography>
                                        </ListItem>
                                        <ListItem >
                                            <Typography marginTop={-2} marginBottom={1.5}>
                                            Effective writing takes more than good grammar
                                                    
                                            </Typography>

                                        </ListItem>

                                        <Divider />

                                        </Box>

                                        <Box width = 'auto'  height = 'auto' bgcolor = 'white' sx = {{

                                            '&:hover': {
                                                background: 'linear-gradient(45deg, skyblue 10%, whitesmoke 50%)',
                                                opacity: [0.9, 0.8, 0.7],
                                                fontSize: '20',
                                                borderRadius: 3,
                                                boxShadow: '0 3px 5px 2px rgba(100, 400, 150, .5)',
                                                width: '15',

                                            }


                                            }}>

                                        <ListItem>
                                            <Typography fontSize={20} fontWeight='bold' color={'blue'} marginTop={1}>
                                                Support you can rely on
                                                
                                            </Typography>
                                        </ListItem>
                                        <ListItem >
                                            <Typography marginTop={-2} marginBottom={1.5}>
                                            Write with a second pair of eyes never gets tired.
                                                    
                                            </Typography>

                                        </ListItem>

                                        <Divider />

                                        </Box>

                                        
                                        <Box width = 'auto'  height = 'auto' bgcolor = 'white' sx = {{

                                            '&:hover': {
                                                background: 'linear-gradient(45deg, skyblue 10%, whitesmoke 50%)',
                                                opacity: [0.9, 0.8, 0.7],
                                                fontSize: '20',
                                                borderRadius: 3,
                                                boxShadow: '0 3px 5px 2px rgba(100, 400, 150, .5)',
                                                width: '15',

                                            }


                                            }}>

                                        <ListItem>
                                            <Typography fontSize={20} fontWeight='bold' color={'blue'} marginTop={1}>
                                                Stire the right tone
                                                
                                            </Typography>
                                        </ListItem>
                                        <ListItem >
                                            <Typography marginTop={-2} marginBottom={1.5}>
                                            Make the best impression, every time
                                                    
                                            </Typography>

                                        </ListItem>

                                        <Divider />

                                        </Box>


                                            
                                        </List>
                                    
                                    </Grid>
                                    
                                </Grid>
                            </Box>
                        </container >

                        {/* Last Section Part */}

                        <Container fixed maxWidth = "md">
                            <Box sx={{  height: '30vh' , marginTop: 20 }} >

                                <Typography varient = "h3" fontSize={ 30 } align = "center" paddingTop={5} fontWeight='bold'>
                                Up-Level Your Communication
                                </Typography>

                                <Typography varient = "h3" fontSize={ 20 } align = "center" paddingTop={1} >
                                Unlock Grammarly Premium’s advanced features and suggestions.
                                </Typography>




                            </Box>
                        </Container>

                        {/* Last Two Box */}
                        <container fixed >
                            <Box sx={{  height: '40vh' , width: '70vw' }} >
                                <Grid container spacing={4} marginLeft={28} >
                                    <Grid item xs={4} md={4} margin={1}>
                                        
                                        <Box width='20vw' p={1} height='auto'  ml={20} >

                                            <Typography variant="span" align='left' color="gray" fontSize={15}>
                                                FOR CASUAL WRITING
                                            </Typography>

                                            <Typography variant="h3" align='left' color="black" fontSize={25} fontWeight='bold'>
                                            Free
                                            </Typography>

                                            <Typography variant="span" align='left' color="black" fontSize={17} >
                                                Basic writing suggestions.
                                            </Typography>

                                            <Box width='auto' p={6} height='15vh'   ml={-6} position='relative' mt={2.6}>
                                            <Button variant="contained" size = "small" disabled >
                                                <Typography variant="p"  align = "center" fontWeight='bold' padding={2} >
                                                    Included In Premium
                                                </Typography>
                                            </Button>
                                            </Box>

                                            <List >
                                                 <Tooltip title={longText}  interactive>

                                                    <ListItem>
                                                    <Typography marginLeft={-3} color={"green"}>
                                                        <DoneIcon />
                                                    </Typography> 
                                                    <Typography marginLeft={1}>
                                                            Spelling
                                                    </Typography>
                                                        
                                                    </ListItem>
                                                </Tooltip>

                                                <Divider/>

                                                <Tooltip title={longText}  interactive>

                                                    <ListItem>

                                                    <Typography marginLeft={-3} color={"green"}>
                                                        <DoneIcon />
                                                    </Typography> 
                                                    <Typography marginLeft={1}>
                                                            Grammar
                                                    </Typography>
                                                        
                                                    </ListItem>
                                                </Tooltip>

                                                <Divider/>

                                                <Tooltip title={longText}  interactive>
                                                    <ListItem>

                                                    <Typography marginLeft={-3} color={"green"}>
                                                        <DoneIcon />
                                                    </Typography> 
                                                    <Typography marginLeft={1}>
                                                            Punctuation
                                                    </Typography>
                                                        
                                                    </ListItem>
                                                </Tooltip>

                                                <Divider/>
                                                
                                                <Tooltip title={longText}  interactive>
                                                    <ListItem>

                                                    <Typography marginLeft={-3} color={"green"}>
                                                        <DoneIcon />
                                                    </Typography> 
                                                    <Typography marginLeft={1}>
                                                            Punctuation
                                                    </Typography>
                                                        
                                                    </ListItem>
                                                </Tooltip>

                                                <Divider/>

                                                <Tooltip title={longText}  interactive>
                                                    <ListItem>

                                                    <Typography marginLeft={-3} color={"green"}>
                                                        <DoneIcon />
                                                    </Typography> 
                                                    <Typography marginLeft={1}>
                                                            Conciseness
                                                    </Typography>
                                                        
                                                    </ListItem>
                                                </Tooltip>

                                                <Divider/>

                            

                                            </List>





                                        </Box>
                                        
                                    
                                    </Grid>

                                    {/*  */}

                                    <Grid item xs={3} md={5} margin= "Left">
                                        
                                        <Box width='25vw' p={1} height='auto'   ml={20} position='relative'>

                                            <Typography variant="span" align='left' color="gray" fontSize={15}>
                                                FOR WORK OR SCHOOL
                                            </Typography>

                                            <Typography variant="h3" align='left' color="black" fontSize={25} fontWeight='bold'>
                                            Premium
                                            </Typography>

                                            <Typography variant="span" align='left' color="black" fontSize={17} >
                                                Style , tone and clarity improvements for writing at work and school.
                                            </Typography>

                                            <Box width='auto' p={6} height='15vh'   ml={-5} position='relative'>
                                            <Button variant="contained" size = "small"   color="success"  width='100%'>
                                                <Typography variant="p"  fontWeight='bold' padding={2} >
                                                    Upgrade to Grammarly Premium 
                                                </Typography>
                                            </Button>
                                            </Box>

                                            <List>

                                                <Tooltip title={longText}  interactive>
                                                    <ListItem >

                                                    <Typography marginLeft={-3} color={"green"}>
                                                        <DoneIcon />
                                                    </Typography> 
                                                    <Typography marginLeft={1}>
                                                            Everything in Free
                                                    </Typography>
                                                        
                                                    </ListItem>
                                                </Tooltip>

                                                <Divider/>


                                                <Tooltip title={longText}  interactive>
                                                    <ListItem>

                                                    <Typography marginLeft={-3} color={"green"}>
                                                        <DoneIcon />
                                                    </Typography> 
                                                    <Typography marginLeft={1}>
                                                            Clarity-focused sentence rewrites
                                                    </Typography>
                                                        
                                                    </ListItem>
                                                </Tooltip>

                                                <Divider/>

                                                <Tooltip title={longText}  interactive>

                                                    <ListItem>

                                                    <Typography marginLeft={-3} color={"green"}>
                                                        <DoneIcon />
                                                    </Typography> 
                                                    <Typography marginLeft={1}>
                                                            Tone adjustments
                                                    </Typography>
                                                        
                                                    </ListItem>

                                                </Tooltip>

                                                <Divider/>

                                                <Tooltip title={longText}  interactive>

                                                    <ListItem>

                                                    <Typography marginLeft={-3} color={"green"}>
                                                        <DoneIcon />
                                                    </Typography> 
                                                    <Typography marginLeft={1}>
                                                            Plagiarism detection
                                                    </Typography>
                                                        
                                                    </ListItem>

                                                </Tooltip>

                                                <Divider/>

                                                <Tooltip title={longText}  interactive>
                                                
                                                    <ListItem>

                                                    <Typography marginLeft={-3} color={"green"}>
                                                        <DoneIcon />
                                                    </Typography> 
                                                    <Typography marginLeft={1}>
                                                            Word choice
                                                    </Typography>
                                                        
                                                    </ListItem>
                                                </Tooltip>

                                                <Divider/>

                                                <Tooltip title={longText} interactive>

                                                    <ListItem>

                                                    <Typography marginLeft={-3} color={"green"} >
                                                        <DoneIcon />
                                                    </Typography> 
                                                    <Typography marginLeft={1}>
                                                            Formality level
                                                    </Typography>
                                                        
                                                    </ListItem>

                                                </Tooltip>
                                                
                                                <Divider/>


                                                <Tooltip title={longText} interactive>

                                                    <ListItem>
                                                
                                                        <Typography marginLeft={-3} color={"green"}>
                                                            <DoneIcon />
                                                        </Typography> 
                                                        <Typography marginLeft={1}>
                                                                Fluency
                                                        </Typography>
                                                            
                                                        </ListItem>

                                                </Tooltip>

                                                <Divider/>
                                              
                                               
                                            </List>

                                        </Box>
                                        
                                    
                                    </Grid>

                                    </Grid>


                            </Box>
                        </container >
                                

                </main>
        
            </>

        );
}

export default App;