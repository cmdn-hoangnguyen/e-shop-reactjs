import { NavigateButton } from '../../../../components/NavigateButton';

const NotFound: React.FC = () => {
	return (
		<section className="section section-notfound d-flex items-center justify-center">
			<div className="notfound-container">
				<div className="notfound-header d-flex-col items-center justify-center">
					<span className="notfound-status">404</span>
					<h2 className="notfound-title">Ooppps! Page Not Found</h2>
				</div>

				<div className="notfound-body d-flex-col items-center justify-center">
					<p className="notfound-content">
						The page you're looking for doesn't exist or may have been moved. Please check the URL
						or return to the homepage.
					</p>

					<NavigateButton
						className="button-bordered button-back-homepage"
						href="/"
						label={'Back to Homepage'}
						isButtonRole
					/>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
