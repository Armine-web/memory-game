import PropTypes from "prop-types";
import { Button } from "../button/button";

export const Modal = ({open, onClose, children, title }) => {
   if (!open) {
        return null
   }
    
    return (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{backgroundColor: "#333"}}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" >{title}</h5>
              {onClose && (
                <button type="button" className="btn-close" aria-label="Close" onClick={onClose}>
              </button>
              )}
              
            </div>
            <div className="modal-body">
              {children}
            </div>
            <div className="modal-footer">
                {onClose && (
                    <Button type="button" classname="btn-secondary">Close</Button>
                )}
            </div>
          </div>
        </div>
      </div>
    )
}


Modal.propTypes = {
    title: PropTypes.string,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.element,
}