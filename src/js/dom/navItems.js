import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import {HashRouter, Link} from 'react-router-dom';



const TopMenu=[
  {
    "Title":"Landing Screen",
    "Link":"/",
    "Icon":"home"
  },
  {
    "Title":"About",
    "Link":"/glabs/about",
    "Icon":"mobile_screen_share"
  },
  {
    "Title":"Infographics",
    "Link":"/glabs/infographics",
    "Icon":"dvr"
  },
  {
    "Title":"Interactives",
    "Link":"/glabs/interactive",
    "Icon":"account_balance_wallet"
  },
  {
    "Title":"Rich Media",
    "Link":"/glabs/richmedia",
    "Icon":"extension"
  },
  {
    "Title":"Long Form Articles",
    "Link":"/glabs/infographics",
    "Icon":"invert_colors"
  }
]

export const mailFolderListItems = (
 
    <HashRouter>
       <div>
          {
            TopMenu.map((nav,i)=>{
              return(
                <ListItem key={i} button>
                  <Link to={nav.Link} className="NavLink" >
                      <ListItemIcon>
                          <i className="material-icons">{nav.Icon}</i>
                      </ListItemIcon>
                      
                      <ListItemText primary={nav.Title} />
                  </Link>
                </ListItem>
              )
            })
          }
    </div>
  </HashRouter>
  
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Contact" />
    </ListItem>
  </div>
);