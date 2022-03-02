import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Index() {
	console.log('render');
	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
		validationSchema: yup.object({
			username: yup.string().required(),
			password: yup.string().min(6).required(),
		}),
	});
	console.log(formik.errors);
	return (
		<div>
			<h1>Login Formik use Hook</h1>
			<form onSubmit={formik.handleSubmit}>
				<input
					type='text'
					name='username'
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.username}
				/>
				<input type='password' {...formik.getFieldProps('password')} />
				<button type='submit'>SignUp</button>
			</form>
		</div>
	);
}

export default Index;
