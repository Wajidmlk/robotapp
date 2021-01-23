import React from 'react';
//import '../Robos.css';
import 'tachyons';
const Robos =({name, email, id}) => 
{
	return(
		<div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 tc'>
			<img alt='robos' src={`https://robohash.org/${id}?200x200`} />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}
export default Robos;