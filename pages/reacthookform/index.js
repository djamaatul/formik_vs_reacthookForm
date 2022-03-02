import React from 'react';
import { useForm } from 'react-hook-form';

function Index() {
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm();
	const onsubmit = (value) => console.log(value);
	console.log('render');
	// console.log(watch('username'));
	console.log(errors);
	return (
		<div>
			<h1>form with react hook</h1>
			<form onSubmit={handleSubmit(onsubmit)}>
				<input type='text' name='username' {...register('username')} />
				<input
					type='text'
					name='password'
					{...register('password', { required: true, min: 6, pattern: /[a-z]/ })}
				/>
				{errors.password && <p>errors</p>}
				<button type='submit'>Login</button>
			</form>
		</div>
	);
}

export default Index;
