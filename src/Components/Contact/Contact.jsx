
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
	const notify = () => toast("Successfuly send your message!");
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_qbk5smc', 'template_8naj6cs', form.current, {
				publicKey: 'zaVXBtmtcUO5dQM27',
			})
			.then(
				() => {
					console.log('SUCCESS!');
				},
				(error) => {
					console.log('FAILED...', error.text);
				},
			);
	};
	return (
		<div
			name="contact"
			className="w-full   pt-28 lg:pt-32 text-white"
		>
			<div className="flex flex-col p-4 justify-center mx-auto h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Contact 
					</p>
					<p className="py-6 text-gray-400">Submit the form below to get in touch with me</p>
				</div>

				<div className=" flex justify-center items-center">
					<form
						ref={form} onSubmit={sendEmail}
						// action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
						// method="POST"
						className=" flex flex-col w-full md:w-1/2"
					>
						<input
							type="text"
							name="user_name"
							placeholder="Enter your name"
							className="p-2 bg-transparent border-2 border-indigo-500 rounded-md text-white focus:outline-none"
						/>
						<input
							type="text"
							name="user_email"
							placeholder="Enter your email"
							className="my-4 p-2 bg-transparent border-2 border-indigo-500 rounded-md text-white focus:outline-none"
						/>
						<textarea
							name="message"
							placeholder="Enter your message"
							rows="10"
							className="p-2 bg-transparent border-2 rounded-md border-indigo-500 text-white focus:outline-none"
						></textarea>

						<button  onClick={notify} type='submit' value="send" className="mt-10 group relative min-h-[50px] w-40 overflow-hidden border border-purple-500 rounded-3xl text-purple-500 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
							<span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
							<span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">Let's Talk</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;