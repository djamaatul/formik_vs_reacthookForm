import React from 'react';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';

function Fullcomponent() {
	// const formik = useFormik({
	// 	initialValues: {
	// 		username: '',
	// 		password: '',
	// 	},
	// 	validationSchema: yup.object({
	// 		username: yup.string().required(),
	// 		password: yup.string().min(6).required(),
	// 	}),
	// 	onSubmit: (values) => {
	// 		console.log(values);
	// 	},
	// });
	console.log('render');
	return (
		<div>
			<h1>Fullcomponent</h1>
			<Formik
				initialValues={{
					username: '',
					password: '',
					confirm: '',
				}}
				validationSchema={yup.object({
					username: yup.string().required(),
					password: yup.string().min(6).required(),
					confirm: yup
						.string()
						.oneOf([yup.ref('password')])
						.required(),
				})}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				<Form>
					<label htmlFor='username'>Username</label>
					<Field name='username' type='text' />
					<ErrorMessage name='username' />
					<label htmlFor='password'>Password</label>
					<Field name='password' type='text' />
					<ErrorMessage name='password' />
					<label htmlFor='confirm'>Confirm</label>
					<Field name='confirm' type='text' />
					<ErrorMessage name='confirm' />
					<button type='submit'>Login</button>
				</Form>
			</Formik>
		</div>
	);
}

export default Fullcomponent;
