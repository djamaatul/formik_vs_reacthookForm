import React from 'react';

function form() {
	const submit = function (e) {
		e.preventDefault();
		let fd = new FormData(e.target);
		console.log(fd);
	};
	return (
		<div>
			<form onSubmit={submit}>
				<input type='text' name='username' />
				<button type='submit'>Kirim</button>
			</form>
		</div>
	);
}

export default form;
