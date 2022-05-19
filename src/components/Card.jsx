const Card = ({children,title}) => {
	return (
		<div className='card'>
			<div className='card-body'>
				<h5 className="text-capitalize card-title">{title}</h5>
				{children}
			</div>
		</div>
	)
}

export default Card