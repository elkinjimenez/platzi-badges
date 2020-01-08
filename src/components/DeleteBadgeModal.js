import React from 'react';

import Modal from './Modal';

function DeleteBadgeModal(props) {
    return <Modal isOpen={props.isOpen} isClose={props.onClose} >
        <div className="DeleteBadgeModal">
            <h1>¿Estás seguro de eliminar el badge?</h1>
            <div>
                <button onClick={props.onDeleteBadge} className="btn btn-danger">Eliminar</button>
                <button onClick={props.onClose} className="m-3 btn btn-primary">Cancelar</button>
            </div>
        </div>
    </Modal>
}

export default DeleteBadgeModal;