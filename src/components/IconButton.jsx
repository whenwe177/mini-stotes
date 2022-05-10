function IconButton(props) {

    const { onClick, content, color, icon: Icon } = props;

    const colorClass = `button button--${color} button--spacebetween button--fill`
    
  return (
    <button onClick={ onClick } className={ colorClass }>
        <p>{ content }</p>
        <Icon/>
    </button>
  )
}

export default IconButton