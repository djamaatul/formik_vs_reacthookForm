import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

function Component() {
	console.log('render');
	return (
		<div>
			<h1>Signup with formik component</h1>
			<Formik
				initialValues={{
					username: '',
					password: '',
				}}
				validationSchema={yup.object({
					username: yup.string().required(),
					password: yup.string().min(6).required(),
				})}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{(formik) => {
					console.log(formik.errors);
					return (
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
					);
				}}
			</Formik>
		</div>
	);
}

export default Component;
