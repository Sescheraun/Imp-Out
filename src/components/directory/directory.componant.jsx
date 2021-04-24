import React from 'react'

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {

            sections:   
                [ {
                title: 'ships'
                , imageURL: 'https://www.cnet.com/a/img/Yy4yPZzjfwdDkHQ9lRcIvSjl78U=/980x0/2020/01/09/02c96ca9-94fe-4d2f-a15d-cf85b3b3a028/ship-tie-razor-crest.jpg'
                //, imageURL: 'https://i.ibb.co/cvpntL1/hats.png'
                , id: 1

             }

            , {
                title: 'droids'
                , imageURL: 'https://i2.wp.com/www.micechat.com/wp-content/uploads/2019/11/Disneyland-News-Star-Wars-Droids.jpeg'
                , id: 2

            }

            , {
                title: 'footwear'
                , imageURL: 'https://i.etsystatic.com/8779385/r/il/426097/2919806577/il_794xN.2919806577_9wso.jpg'
                , id: 3

            }

            , {
                title: 'weapons'
                , imageURL: 'https://us.v-cdn.net/5021068/uploads/editor/mf/rvwco1q4a6eo.jpg'
                , size: 'large'
                , id: 4

            }

            , {
                title: 'clothing'
                , imageURL: 'https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/02684716-f821-ea98-c691-7ed01311b0df/630x355.jpg'
                , size: 'large'
                , id: 5


            }

            ]

        };
    }


render() {
    return (
        <div className = 'directory-menu'>
            {this.state.sections.map(({title, imageURL, size, id}) => (
                    <MenuItem key={id} title={title} image={imageURL} size={size}/>
                ))}
        </div>

    );
}
}
export default Directory;