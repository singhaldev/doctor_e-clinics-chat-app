import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";

export default function NewContactModal({ closeModal }) {
	const idRef = useRef();
	const nameRef = useRef();
	const { createContact, contacts } = useContacts();
	const { createConversation } = useConversations();

	function handleSubmit(e) {
		e.preventDefault();
		const c = contacts.find((contact) => {
			return contact.id === idRef.current.value;
		});
		c === undefined && createContact(idRef.current.value, nameRef.current.value);
		c?.id === undefined
			? createConversation([idRef.current.value])
			: alert("id already register");
		closeModal();
	}

	return (
		<>
			<Modal.Header closeButton>Create Contact</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label>Id</Form.Label>
						<Form.Control type="text" ref={idRef} required />
					</Form.Group>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" ref={nameRef} required />
					</Form.Group>
					<Button type="submit">Create</Button>
				</Form>
			</Modal.Body>
		</>
	);
}
