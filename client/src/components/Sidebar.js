import React, { useState } from "react";
import { Tab, Button, Modal } from "react-bootstrap";
import Conversations from "./Conversations";
import NewContactModal from "./NewContactModal";

const CONVERSATIONS_KEY = "conversations";

export default function Sidebar({ id }) {
	const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
	const [modalOpen, setModalOpen] = useState(false);

	function closeModal() {
		setModalOpen(false);
	}

	return (
		<div style={{ width: "250px" }} className="d-flex flex-column">
			<Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
				<Tab.Content className="border-right overflow-auto flex-grow-1">
					<Tab.Pane eventKey={CONVERSATIONS_KEY}>
						<Conversations />
					</Tab.Pane>
				</Tab.Content>
				<div className="p-2 border-top border-right small">
					Your Id: <span className="text-muted">{id}</span>
				</div>
				<Button onClick={() => setModalOpen(true)} className="rounded-0">
					Start New Conversation
				</Button>
			</Tab.Container>

			<Modal show={modalOpen} onHide={closeModal}>
				<NewContactModal closeModal={closeModal} />
			</Modal>
		</div>
	);
}
