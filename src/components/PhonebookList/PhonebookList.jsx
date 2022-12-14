import React from "react";
import PropTypes from 'prop-types';
import { Button, InfoContact, ContactList } from "./PhonebookList.styled";

const PhonebookList = ({ contacts, DeleteContact }) => {
    return (
        <div>
        <ContactList>
                {contacts.map(({id, name, number}) => (
                    <li key={id}>
            <InfoContact>{name}: </InfoContact>
            <InfoContact>{number}</InfoContact>
            <Button type="button" onClick={() => DeleteContact(id)}>Delete</Button>
        </li>))}
            </ContactList>
        </div>
    )
}

export default PhonebookList;

PhonebookList.propTypes = {
    contacts: PropTypes.array.isRequired,
    DeleteContact: PropTypes.func.isRequired,
}