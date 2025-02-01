export function Button (props) {
    const {children, className, icon, ...rest} = props;
    console.log(props);
    console.log(rest);
    
    return (
        <button {...rest} className={`btn ${className}`}>{children} {icon && <i className={`fa-brands ${icon}`}></i>}</button>
        
    )
}