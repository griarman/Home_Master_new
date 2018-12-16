import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCommentAlt, faCheck, faUser, faEye } from '@fortawesome/free-solid-svg-icons';

import {
    NameTag,
    FirstLine,
    SecondLine,
    ThirdLine,
    Country,
    Message,
    SendMessage,
    Contacts,
    Report,
    Text,
    City,
    GPS
} from './personalDetails_css';

library.add(faMapMarkerAlt, faCommentAlt, faCheck, faUser, faEye);

export default function PersonalDetails (props) {
    // let contacts = ()
    const { master, master_description_data, city, contacts, message,report,timeLine,about } = props;
    return (
        <div>
            <FirstLine>
                <NameTag>{master.master_name} {master.master_surname}</NameTag>
                <GPS>
                    <FontAwesomeIcon icon="map-marker-alt" />
                    <Country>{master_description_data.armenia},</Country>
                    <City id={city.id}>{city.name}</City>
                </GPS>
            </FirstLine>
            <SecondLine>
                <Message>
                    <FontAwesomeIcon icon="comment-alt" />
                    <SendMessage>{message}</SendMessage>
                </Message>
                <Contacts>
                    <FontAwesomeIcon icon="check" />
                    <Text>{contacts}</Text>
                </Contacts>
                <Report>{report}</Report>
            </SecondLine>
            <ThirdLine>
                <div>
                    <FontAwesomeIcon icon="eye" />
                    <Text>{timeLine}</Text>
                </div>
                <div>
                    <FontAwesomeIcon icon="user" />
                    <Text>{about}</Text>
                </div>
            </ThirdLine>
        </div>
    );
}
