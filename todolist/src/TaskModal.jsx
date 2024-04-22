const TaskModal = () => {
    return(
        <div className="modal fade" id={"TaskModal"}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title"
                            id="taskModalLabel">
                            Add new Task
                        </h5>

                    </div>
                    <div className="modal-body">
                         <div className="row">
                            <p className="col">
                                Formulario                            
                                </p>
                         </div>
                                         
                    </div>
                    <div className="modal-footer">
                        
                    <button className="btn btn-sm btn-primary">
                            <i className="bi bi-pencil-square"></i>
                            Save
                    </button>
                    <button
                    className="btn btn-sm btn-outline-secondary" data-bs-dismiss="modal"> 
                            <i className="bi bi-x -lg"></i>
                             Close
                        </button>
               

            
                    </div>
                </div>
            </div>
        </div>
    )
   
}

export default TaskModal