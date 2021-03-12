import React from "react";
import Sidebar from "./Sidebar";
import { Navbar } from "react-bootstrap";
import OpenConversation from "./OpenConversation";
import { useConversations } from "../contexts/ConversationsProvider";

export default function Dashboard({ id }) {
	const { selectedConversation } = useConversations();

	return (
		<>
			<Navbar expand="sm" style={{ backgroundColor: "#128C7E" }}>
				<Navbar.Brand>Doctor e-clinics</Navbar.Brand>
			</Navbar>
			<div className="d-flex" style={{ height: "90vh" }}>
				<Sidebar id={id} />
				{selectedConversation && <OpenConversation />}
			</div>
		</>
	);
}
